const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			getContacts: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/juanrulu");
					const data = await response.json();

					if (data.contacts) {
						setStore({ contacts: data.contacts });
					} else {
						console.error("No se encontraron contactos");
						setStore({ contacts: [] });
					}
				} catch (error) {
					console.error("Error al obtener contactos:", error);
				}
			},

			createAgenda: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/juanrulu", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ slug: "juanrulu" })
					});

					if (response.ok) {
						console.log("Agenda creada exitosamente");
						getActions().getContacts();
					} else {
						console.error("Error creando la agenda");
					}
				} catch (error) {
					console.error("Error en la solicitud:", error);
				}
			},

			addContact: async (name, email, phone, address) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/juanrulu/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name: name || null,
							phone: phone || null,
							email: email || null,
							address: address || null
						})
					});

					if (response.ok) {
						const newContact = await response.json();
						const store = getStore();
						setStore({ contacts: [...store.contacts, newContact] });
					} else {
						console.error("Error al agregar contacto");
					}
				} catch (error) {
					console.error("Error en la solicitud:", error);
				}
			},

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/juanrulu/contacts/${id}`, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" }
					});

					if (response.ok) {
						const store = getStore();
						setStore({
							contacts: store.contacts.filter(contact => contact.id !== id) // Eliminar contacto del store
						});
					} else {
						console.error("Error al eliminar contacto");
					}
				} catch (error) {
					console.error("Error en la solicitud:", error);
				}
			},

			updateContact: async (name, email, phone, address, id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/juanrulu/contacts/${id}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name: name || null,
							email: email || null,
							phone: phone || null,
							address: address || null
						})
					});

					if (response.ok) {
						const updatedContact = await response.json();
						const store = getStore();
						setStore({
							contacts: store.contacts.map(contact =>
								contact.id === id ? updatedContact : contact
							)
						});
					} else {
						console.error("Error al actualizar contacto");
					}
				} catch (error) {
					console.error("Error en la solicitud:", error);
				}
			}
		}
	};
};

export default getState;
