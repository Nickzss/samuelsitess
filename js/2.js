const marcaEspecial = document.querySelector('.marca-especial');
let readableModeActive = false;

// Add click event listener
marcaEspecial.addEventListener('click', function() {
    // Toggle the mode
    readableModeActive = !readableModeActive;
    
    if (readableModeActive) {
        // Change to readable mode
        document.body.style.fontFamily = 'Arial, sans-serif';
        marcaEspecial.style.color = '#8A2BE2'; // Purple color
        
        // Create and show temporary message
        const message = document.createElement('div');
        message.textContent = 'Modo de lectura sencillo';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            font-family: Arial, sans-serif;
            z-index: 1000;
            transition: opacity 0.5s;
        `;
        document.body.appendChild(message);
        
        // Remove message after 2 seconds
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 500);
        }, 2000);
    } else {
        // Revert to original font
        document.body.style.fontFamily = 'co, sans-serif';
        marcaEspecial.style.color = '#ffa500'; // Original orange color
    }
});

// Add cursor pointer to indicate clickable
marcaEspecial.style.cursor = 'pointer';