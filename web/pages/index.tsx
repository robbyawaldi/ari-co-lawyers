import React from "react"
import { HomeQuote } from "../components/atoms/HomeQuote"
import { HomeBlog } from "../components/molecules/HomeBlog"
import { HomeCounter } from "../components/molecules/HomeCounter"
import { HomeTeam } from "../components/molecules/HomeTeam"
import { HomeIntro } from "../components/organisms/HomeIntro"
import { MainLayout } from "../components/templates/MainLayout"

const Index = () => {
  return (
    <MainLayout>
      <HomeIntro />
      <HomeTeam />
      <HomeCounter />
      <HomeBlog />
      <HomeQuote />
    </MainLayout>
  )
}

export default Index