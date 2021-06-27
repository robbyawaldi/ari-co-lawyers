import { AboutIntro } from "../../components/atoms/AboutIntro"
import { MainLayout } from "../../components/templates/MainLayout"
import { PageLayout } from "../../components/templates/PageLayout"

const Index = () => {
    return (
        <MainLayout>
            <PageLayout title="ABOUT">
                <AboutIntro />
            </PageLayout>
        </MainLayout>
    )
}

export default Index