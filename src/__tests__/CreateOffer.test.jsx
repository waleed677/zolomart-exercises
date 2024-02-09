import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateOffer from "../components/CreateOffer";
import { vi } from "vitest";
import { db } from "../firebase.config";

vi.mock("../firebase.config", () => ({
  db: {
    collection: vi.fn(() => ({
      addDoc: vi.fn(() => Promise.resolve()),
    })),
  },
}));

describe("CreateOffer component", () => {
  test("renders form and submits offer", async () => {
    render(<CreateOffer />);

    userEvent.type(screen.getByLabelText(/Job Position/i), "Software Engineer");
    userEvent.type(screen.getByLabelText(/Salary/i), "100000");
    userEvent.type(screen.getByLabelText(/Equity/i), "2");
    userEvent.type(screen.getByLabelText(/Bonus/i), "5000");
    userEvent.type(
      screen.getByLabelText(/Culture/i),
      "Innovative and collaborative work environment"
    );
    userEvent.type(
      screen.getByLabelText(/Learning Opportunities/i),
      "Access to online courses and workshops"
    );

    fireEvent.click(screen.getByText(/Create Offer/i));
  });
});
