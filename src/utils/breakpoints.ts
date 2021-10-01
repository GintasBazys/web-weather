import { useMediaQuery } from "react-responsive";

export const mobile = "(max-width: 30rem)"; //480px
export const tablet = "(max-width: 48rem)"; //768px

export const useQuery = () => ({
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
});
