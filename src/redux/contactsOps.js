import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://6804040679cb28fb3f5a3235.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        const response = await axios.get(API_URL);
        return response.data;
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact) => {
        const response = await axios.post(API_URL, contact);
        return response.data;
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        return id;
    }
);
