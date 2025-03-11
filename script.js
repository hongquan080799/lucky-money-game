document.addEventListener("DOMContentLoaded", () => {
    const landingPage = document.getElementById("landingPage");
    const gameContainer = document.getElementById("gameContainer");
    const startGameButton = document.getElementById("startGameButton");

    // Hardcoded messages
    const messages = [
        "Giảm 20% toàn bộ sản phẩm",
        "Giảm 10% toàn bộ sản phẩm",
        "Tặng hộp đựng trang sức cho đơn > 350k",
        "Tặng khuyên tai ngọc trai trị giá 150k cho đơn > 350k",
        "Tặng khăn lau bạc cho hóa đơn bất kì"
    ];

    // Shuffle messages
    const shuffledMessages = messages.sort(() => Math.random() - 0.5);

    // Navigate from landing page to game
    startGameButton.addEventListener("click", () => {
        landingPage.classList.add("hidden");
        gameContainer.classList.remove("hidden");
    });

    // Add click event to each envelope
    const envelopes = document.querySelectorAll(".envelope");
    envelopes.forEach((envelope, index) => {
        envelope.addEventListener("click", () => {
            // Reveal the message
            const resultElement = document.getElementById("result");
            resultElement.textContent = shuffledMessages[index];

            // Disable further clicks
            envelopes.forEach(env => env.style.pointerEvents = "none");
            envelope.classList.add("selected");
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const envelopes = document.querySelectorAll('.envelope');
    const envelopesContainer = document.querySelector('.envelopes-container');

    // Click event for each envelope
    envelopes.forEach((envelope) => {
        envelope.addEventListener('click', function() {
            // Hide all envelopes except the clicked one
            envelopes.forEach((el) => {
                if (el !== envelope) {
                    el.classList.add('hidden');
                }
            });

            // Show content inside the selected envelope
            const content = envelope.querySelector('.envelope-content');
            content.style.display = 'block'; // Reveal the content
            envelope.classList.add('selected'); // Add a border around the envelope

            // Optionally, you can add a delay before showing the content (animation effect)
            setTimeout(() => {
                content.style.opacity = 1; // Make the content fully visible
                content.style.transform = 'scale(1)';
            }, 500); // Delay to match animation timing
        });
    });
});
