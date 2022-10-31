import { i18n } from "next-i18next";

export class UnexpectedError extends Error {
  constructor() {
    super(i18n?.t("errors:unexpected_error"));

    this.name = "Unexpected error";
  }
}
