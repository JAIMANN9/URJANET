declare module "d3-sankey" {
  export interface SankeyNode<N = unknown, L = unknown> {
    name?: string;
    x0?: number;
    x1?: number;
    y0?: number;
    y1?: number;
  }

  export interface SankeyLink<N = unknown, L = unknown> {
    source: number | SankeyNode<N, L>;
    target: number | SankeyNode<N, L>;
    value: number;
    width?: number;
  }

  export interface SankeyGraph<N = unknown, L = unknown> {
    nodes: Array<SankeyNode<N, L>>;
    links: Array<SankeyLink<N, L>>;
  }

  export function sankey<N = unknown, L = unknown>(): {
    nodeWidth(n: number): ReturnType<typeof sankey<N, L>>;
    nodePadding(p: number): ReturnType<typeof sankey<N, L>>;
    extent(ext: [[number, number], [number, number]]): ReturnType<typeof sankey<N, L>>;
    (graph: SankeyGraph<N, L>): SankeyGraph<N, L>;
  };

  export function sankeyLinkHorizontal<N = unknown, L = unknown>(): (link: SankeyLink<N, L>) => string | undefined;
}


