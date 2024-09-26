describe('Pruebas de gestión de empleados', () => {
    beforeEach(() => {
        // Visitar la página principal de la aplicación
        cy.visit('http://localhost:4200'); // Cambia esta URL según tu aplicación
        cy.wait(2000); // Aumenta el tiempo de espera para asegurarte de que la página se carga
    });

    it('Debería añadir un nuevo empleado', () => {
        // Ir a la página de registrar empleado
        cy.get('button').contains('Añadir Empleado').click();

        // Completar el formulario
        cy.get('input[name="nombre"]').type('Elena');
        cy.get('input[name="apellido"]').type('Garcia');
        cy.get('input[name="email"]').type('Elena@example.com');
        cy.get('input[name="horasTrabajadas"]').type('8.5'); // Asegúrate de que este campo exista en el formulario

        // Enviar el formulario
        cy.get('button').contains('Guardar').click();

        // Verificar que el empleado se ha añadido a la lista
        cy.get('table').contains('td', 'Elena').should('be.visible'); // Verifica que el nombre aparece en la tabla
    });

    it('Debería mostrar un error al intentar añadir un empleado con email existente', () => {
        // Ir a la página de registrar empleado
        cy.get('button').contains('Añadir Empleado').click();

        // Completar el formulario con un email que ya existe
        cy.get('input[name="nombre"]').type('Juan');
        cy.get('input[name="apellido"]').type('Pérez');
        cy.get('input[name="email"]').type('Elena@example.com'); // Este email debe ya estar en la lista
        cy.get('input[name="horasTrabajadas"]').type('7.5'); // Puedes ajustar este valor

        // Enviar el formulario
        cy.get('button').contains('Guardar').click();

        // Verificar que se muestra un mensaje de error
        cy.get('.swal2-html-container').should('contain', 'Error al crear empleado'); // Asegúrate de que este mensaje coincida con tu aplicación
    });

    it('Debería mostrar la lista de empleados', () => {
        // Asegurarse de que estamos en la lista de empleados
        cy.visit('http://localhost:4200/empleados'); // Usa la URL completa
        cy.wait(2000); // Aumenta el tiempo de espera para asegurarte de que la página se carga

        // Verificar que la tabla de empleados está visible
        cy.get('table').should('be.visible');

        // Verificar que un empleado específico está en la tabla
        cy.get('table').contains('td', 'Elena').should('be.visible'); // Verifica que el nombre aparece en la tabla
    });
});
