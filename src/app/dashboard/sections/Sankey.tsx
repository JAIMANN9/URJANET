"use client";
import { sankey as d3sankey, sankeyLinkHorizontal, SankeyGraph } from "d3-sankey";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLiveStore } from "@/store/live";

export default function Sankey() {
  const { latest } = useLiveStore();
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ w: 600, h: 320 });

  useEffect(() => {
    function onResize() {
      const el = ref.current?.parentElement;
      if (el) setSize({ w: el.clientWidth, h: 320 });
    }
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const data = useMemo(() => buildGraph(latest), [latest]);

  useEffect(() => {
    if (!ref.current) return;
    const svg = ref.current;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const sankey = d3sankey<SNode, SLink>().nodeWidth(14).nodePadding(12).extent([[1, 1], [size.w - 1, size.h - 1]]);
    const graph: SankeyGraph<SNode, SLink> = sankey(data as SankeyGraph<SNode, SLink>);

    const g = svg.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g"));

    // Links
    const linkGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const linkPath = sankeyLinkHorizontal<SNode, SLink>();
    graph.links.forEach((l) => {
      const path = String(linkPath(l));
      const el = document.createElementNS("http://www.w3.org/2000/svg", "path");
      el.setAttribute("d", path);
      const src = typeof l.source === "number" ? (graph.nodes[l.source] as SNode) : (l.source as SNode);
      el.setAttribute("stroke", colorFor(src.name));
      el.setAttribute("stroke-opacity", "0.5");
      el.setAttribute("fill", "none");
      const width = (l as SLink).width ?? 1;
      el.setAttribute("stroke-width", String(Math.max(1, width)));
      linkGroup.appendChild(el);
    });
    g.appendChild(linkGroup);

    // Nodes
    const nodeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    graph.nodes.forEach((n) => {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", String(n.x0 ?? 0));
      rect.setAttribute("y", String(n.y0 ?? 0));
      rect.setAttribute("width", String((n.x1 ?? 0) - (n.x0 ?? 0)));
      rect.setAttribute("height", String(Math.max(1, (n.y1 ?? 0) - (n.y0 ?? 0))));
      // Ensure a definite string is passed for the fill color
      rect.setAttribute("fill", colorFor(n.name ?? "Unknown"));
      rect.setAttribute("rx", "3");
      nodeGroup.appendChild(rect);
    });
    g.appendChild(nodeGroup);
  }, [data, size]);

  return (
    <svg ref={ref} width={size.w} height={size.h} role="img" aria-label="Energy flow diagram" />
  );
}

type SNode = { name: string; x0?: number; x1?: number; y0?: number; y1?: number };
type SLink = { source: number | SNode; target: number | SNode; value: number; width?: number };

function buildGraph(latest: ReturnType<typeof useLiveStore>["latest"]) {
  const nodes = ["Solar", "Wind", "Battery", "Grid", "Load"].map((name) => ({ name }));
  const index = (name: string) => nodes.findIndex((n) => n.name === name);
  const links = [
    { source: index("Solar"), target: index("Battery"), value: Math.max(0, latest.solarKW * 0.3) },
    { source: index("Solar"), target: index("Load"), value: Math.max(0, latest.solarKW * 0.7) },
    { source: index("Wind"), target: index("Battery"), value: Math.max(0, latest.windKW * 0.25) },
    { source: index("Wind"), target: index("Load"), value: Math.max(0, latest.windKW * 0.75) },
    { source: index("Battery"), target: index("Load"), value: Math.max(0, latest.batteryKW) },
    { source: index("Grid"), target: index("Load"), value: Math.max(0, latest.gridImportKW) },
  ];
  return { nodes, links };
}

function colorFor(name: string) {
  if (name === "Solar") return "#F59E0B";
  if (name === "Wind") return "#3B82F6";
  if (name === "Battery") return "#10B981";
  if (name === "Grid") return "#6B7280";
  return "#111827";
}


