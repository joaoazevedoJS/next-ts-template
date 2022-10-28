import React from "react";

import { Favicon } from "./Favicon";
import { Fonts } from "./Fonts";

type IDocumentProps = {
  Favicon: React.FC;
  Fonts: React.FC;
};

export const DocumentContent: ReactDotNotation<React.FC, IDocumentProps> = () => <></>;

DocumentContent.Favicon = Favicon;
DocumentContent.Fonts = Fonts;
