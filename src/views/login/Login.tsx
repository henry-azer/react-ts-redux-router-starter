import { useTranslation } from "react-i18next";

export const Component = function Login(): JSX.Element {
    const { t } = useTranslation();

    return <div style={{ textAlign: 'center', }}>{t("login:title")}</div>;
};
