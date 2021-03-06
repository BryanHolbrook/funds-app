import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders fund app", () => {
  const { getByText } = render(<App />)
  const headerElement = getByText(/Blockchain Analyzed Funds/i)
  expect(headerElement).toBeInTheDocument()
})
