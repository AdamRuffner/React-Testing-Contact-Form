import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

describe("Testing ContactForm", () => {
  test("contact form renders without errors", () => {
    render(<ContactForm />);
  });

  test("user can fill out form", async () => {
    //Arrange
    render(<ContactForm />);

    //Act
    const firstNameInput = screen.getByLabelText(/first Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const button = screen.getByRole("button", { name: /submit/i });

    const newFirstName = screen.findByText("Adam");
    const newLastName = screen.findByText("Ruffner");
    const newEmailInput = screen.findByText("adam@adam.com");
    const newMessageInput = screen.findByText("hello");

    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "Bob" },
    });
    fireEvent.change(lastNameInput, {
      target: { name: "lastName", value: "Ruffner" },
    });
    fireEvent.change(emailInput, {
      target: { name: "email", value: "bob@bob.com" },
    });
    fireEvent.change(messageInput, {
      target: { name: "message", value: "hello" },
    });
    fireEvent.click(button);

    //Assert
    expect(newFirstName).toBeTruthy();
    expect(newLastName).toBeTruthy();
    expect(newEmailInput).toBeTruthy();
    expect(newMessageInput).toBeTruthy();
  });
});
