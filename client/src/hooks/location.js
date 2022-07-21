export function useLocation(): Location {
    invariant(
      useInRouterContext(),
      // TODO: This error is probably because they somehow have 2 versions of the
      // router loaded. We can help them understand how to avoid that
      `useLocation() may be used only in the context of a <Router> component.`
    );
  
    return React.useContext(LocationContext).location;
  }