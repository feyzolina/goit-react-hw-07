// import { createSelector } from "@reduxjs/toolkit";
// import { selectNameFilter } from "./filtersSlice";
// import { selectContacts } from "./contactsSlice";

// // Filtered contacts selector
// export const selectFilteredContacts = createSelector(
//     [selectContacts, selectNameFilter],
//     (contacts, nameFilter) => {
//         return contacts.filter((contact) =>
//             contact.name.toLowerCase().includes(nameFilter.toLowerCase())
//         );
//     }
// );

// // Select all contacts (for usage in components that do not require filtering)
// export const selectContacts = (state) => state.contacts.items;
