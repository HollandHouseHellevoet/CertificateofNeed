declare module "react-simple-maps" {
  import { ComponentType, SVGProps, ReactNode } from "react";

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      rotate?: [number, number, number];
      center?: [number, number];
      scale?: number;
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  interface GeographiesProps {
    geography: string | object;
    children: (data: {
      geographies: GeographyType[];
    }) => React.ReactNode;
  }

  interface GeographyType {
    rsmKey: string;
    properties: {
      name: string;
      [key: string]: unknown;
    };
    type: string;
    geometry: object;
  }

  interface GeographyProps extends SVGProps<SVGPathElement> {
    geography: GeographyType;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
  }

  interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    children: React.ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
}
