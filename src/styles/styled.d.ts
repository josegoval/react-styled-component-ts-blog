import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      link: string;
      warning: string;
      error: string;
    };
  }
}
