import { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';

import { useTranslation } from "react-i18next";

export const BaseLayout: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <Box>
                <Typography variant="h4">{t("layout:base:title")}</Typography>
                <Suspense>
                    <Outlet />
                </Suspense>
            </Box>
        </Fragment>
    );
}
