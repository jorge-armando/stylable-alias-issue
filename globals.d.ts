declare module "third-party-package/*.st.css" {
  export * from "@stylable/runtime/stylesheet";

  const defaultExport: unknown;
  export default defaultExport;
}

declare module "*.st.css" {
  export * from "@stylable/runtime/stylesheet";

  const defaultExport: unknown;
  export default defaultExport;
}
