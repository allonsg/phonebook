import { AppBar } from "components/AppBar/AppBar";
import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getUser } from "redux/userSlice";
import { AppWrapper, FooterBlock, FooterLink, FooterWrapper, MainBlock } from "./Layout.styled";

const Layout = () => {
    const user = useSelector(getUser);

    return (
        <AppWrapper>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <MainBlock user={user}>
                    <Outlet />
                </MainBlock>
            </Suspense>
            <FooterBlock>
                <FooterWrapper>

                <FooterLink href="https://github.com/allonsg">ALLONS_G</FooterLink>
                </FooterWrapper>
            </FooterBlock>
        </AppWrapper>
    )
};

export default Layout;