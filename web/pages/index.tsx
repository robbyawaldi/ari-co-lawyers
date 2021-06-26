import React from "react"
import { HomeBottom } from "../components/organisms/HomeBottom"
import { HomeMiddle } from "../components/organisms/HomeMiddle"
import { HomeTop } from "../components/organisms/HomeTop"
import { LayoutFront } from "../components/templates/LayoutFront"

const Index = () => {
  return (
    <LayoutFront>
      <HomeTop />
      <HomeMiddle />
      <HomeBottom />
    </LayoutFront>
  )
}

export default Index