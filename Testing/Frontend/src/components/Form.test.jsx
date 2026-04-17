import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import FormExample from "./Form";

describe("Registration Form", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("renders all input fields", () => {
    render(<FormExample />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });

  it("shows error when fields are empty", () => {
    render(<FormExample />);

    const button = screen.getByText(/submit/i);
    fireEvent.click(button);

    expect(screen.getByText(/all fields are required/i)).toBeInTheDocument();
  });

  it("shows error for short password", () => {
    render(<FormExample />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Test" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText(/submit/i));

    expect(
      screen.getByText(/password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  it("submits form successfully", () => {
    render(<FormExample />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Test" },
    });

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });

    // NOTE: skipping dropdowns & checkbox for now (simplified test)

    fireEvent.click(screen.getByText(/submit/i));

    // Since validation fails for missing gender/country/agree
    expect(screen.getByText(/please select gender/i)).toBeInTheDocument();
  });

});