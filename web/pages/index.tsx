import React from "react"
import { HomeMiddle } from "../components/organisms/HomeMiddle"
import { HomeTop } from "../components/organisms/HomeTop"
import { LayoutFront } from "../components/templates/LayoutFront"

const Index = () => {
  return (
    <LayoutFront>
      <HomeTop />
      <HomeMiddle />
    </LayoutFront>
  )
}

export default Index