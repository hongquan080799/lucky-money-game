document.addEventListener("DOMContentLoaded", () => {
    const landingPage = document.getElementById("landingPage");
    const gameContainer = document.getElementById("gameContainer");
    const startGameButton = document.getElementById("startGameButton");
    const resultElement = document.getElementById("result");

    // Define messages with probabilities
    const messages = [
        { text: "Giảm 20% toàn bộ sản phẩm", probability: 35 },
        { text: "Giảm 10% toàn bộ sản phẩm", probability: 20 },
        { text: "Tặng hộp đựng trang sức cho đơn > 350k", probability: 20 },
        { text: "Tặng khuyên tai ngọc trai trị giá 150k cho đơn > 350k", probability: 20 },
        { text: "Tặng khăn lau bạc cho hóa đơn bất kì", probability: 5 }
    ];

    // Function to get a message based on probability
    function getRandomMessage() {
        const random = Math.random() * 100; // Random number between 0-100
        let cumulativeProbability = 0;

        for (const message of messages) {
            cumulativeProbability += message.probability;
            if (random < cumulativeProbability) {
                return message.text;
            }
        }
    }

    // Navigate from landing page to game
    startGameButton.addEventListener("click", () => {
        landingPage.classList.add("hidden");
        gameContainer.classList.remove("hidden");
    });

    // Add click event to each envelope
    const envelopes = document.querySelectorAll(".envelope");
    envelopes.forEach((envelope) => {
        envelope.addEventListener("click", function () {
            // Hide all envelopes except the clicked one
            envelopes.forEach((el) => {
                if (el !== envelope) {
                    el.classList.add("hidden");
                }
            });

            // Reveal the message
            resultElement.textContent = getRandomMessage();

            // Show content inside the selected envelope
            const content = envelope.querySelector(".envelope-content");
            content.style.display = "block"; // Reveal content
            envelope.classList.add("selected"); // Highlight selected envelope

            // Apply animation
            setTimeout(() => {
                content.style.opacity = 1;
                content.style.transform = "scale(1)";
            }, 500);

            // Disable further clicks
            envelopes.forEach(env => env.style.pointerEvents = "none");
        });
    });
});
