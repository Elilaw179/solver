const topics = [
  {
    name: "Indices",
    subtopics: ["Laws of indices", "Power"],
  },

  {
    name: "Logarithms",
    subtopics: ["Laws of logarithms"],
  },
  {
    name: "Surds",
    subtopics: ["Laws of surds"],
  },
  {
    name: "Fractions",
    subtopics: ["Formulas in fractions"],
  },
  {
    name: "Sequence",
    subtopics: ["Formulas in sequence"],
  },
  {
    name: "Mensurations",
    subtopics: ["Formulas in mensuration", "Calculations"],
  },
  {
    name: "Statistics",
    subtopics: ["Formulas in statistics"],
  },
  {
    name: "Probability",
    subtopics: ["Formulas in probability"],
  },
  {
    name: "Coordinate",
    subtopics: ["Formulas in coordinate"],
  },
  {
    name: " Matrix",
    subtopics: ["Formulas in matrix"],
  },
  {
    name: " Commercial",
    subtopics: ["Formulas in commercial"],
  },
  {
    name: "Modulo",
    subtopics: ["Formulas in modulo"],
  },
  {
    name: "Logic",
    subtopics: ["Formulas in logic"],
  },
  {
    name: "Mapping",
    subtopics: ["Formulas in mapping"],
  },
  {
    name: "Circle",
    subtopics: ["Formulas in circle"],
  },
  {
    name: "Vectors",
    subtopics: ["Formulas in vectors"],
  },
  {
    name: "Quadractic ",
    subtopics: ["Formulas in quadractic"],
  },
  {
    name: "Trigonometry",
    subtopics: ["Formulas in trigonometry"],
  },
  {
    name: "Geometry",
    subtopics: ["Formulas in geometry"],
  },
  {
    name: " Calculus",
    subtopics: ["Formulas in calculus"],
  },
];

// Select the container where the topics will be inserted
const mathsTopicsContainer = document.getElementById("maths-topics");

// Function to create and insert topics dynamically
function createTopics() {
  topics.forEach((topic) => {
    const topicDiv = document.createElement("div");
    topicDiv.className = "topic";
    topicDiv.innerHTML = `
        ${topic.name}
        <span>
          <select>
            <option value=""></option>
            ${topic.subtopics
              .map(
                (subtopic) =>
                  `<option value="${subtopic
                    .toLowerCase()
                    .replace(/ /g, "-")}">${subtopic}</option>`
              )
              .join("")}
          </select>
        </span>
      `;
    mathsTopicsContainer.appendChild(topicDiv);
  });
}

// Call the function to create topics
createTopics();

// Function to load external HTML content into a modal
function loadModalContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("modal-description").innerHTML = data;
      document.getElementById("modal").style.display = "block";
      document.querySelector(".modal-content").style.display = "block";

      // Trigger MathJax to re-render the new content
      if (window.MathJax) {
        MathJax.typesetPromise(); // Ensure MathJax renders the content
      }
    })
    .catch((error) => console.error("Error loading content:", error));
}

// Add event listeners to handle modal display and move the selected topic up
document.querySelectorAll(".topic select").forEach((selectElement) => {
  selectElement.addEventListener("change", function () {
    const selectedTopic = this.value;
    const topicDiv = this.closest(".topic");

    // Remove the 'selected' class from all topics
    document.querySelectorAll(".topic").forEach((div) => {
      div.classList.remove("selected");
    });

    // Add the 'selected' class to the currently selected topic
    topicDiv.classList.add("selected");

    // Handle modal content based on selected subtopic
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");

    if (selectedTopic === "power") {
      document.getElementById("modal-title").textContent = "Power Calculation";
      document.getElementById("modal-description").innerHTML =
        "Enter the base and exponent to calculate the power...";
      modal.style.display = "block";
      modalContent.style.display = "block";
    } else if (selectedTopic === "laws-of-indices") {
      document.getElementById("modal-title").textContent = "Law's of Indices";
      loadModalContent("laws-of-indices.html");
    } else if (selectedTopic === "laws-of-logarithms") {
      document.getElementById("modal-title").textContent = "Laws of Logarithms";
      loadModalContent("laws-of-log.html");
    } else if (selectedTopic === "laws-of-surds") {
      document.getElementById("modal-title").textContent = "Laws of surds";
      loadModalContent("laws_of_surds.html");
    } else if (selectedTopic === "formulas-in-mensuration") {
      document.getElementById("modal-title").textContent =
        "Formulas in mensuration";
      loadModalContent("mensurations-formula.html");
    } else if (selectedTopic === "formulas-in-fractions") {
      document.getElementById("modal-title").textContent =
        "Formulas in fractions";
      loadModalContent("fractions.html");
    }  
    
    else if (selectedTopic === "formulas-in-statistics") {
      document.getElementById("modal-title").textContent =
        "Formulas in statistics";
      loadModalContent("statistics.html");
    
  } else if (selectedTopic === "formulas-in-probability") {
    document.getElementById("modal-title").textContent =
      "Formulas in probability ";
    loadModalContent("probability.html");
  
  } else if (selectedTopic === "formulas-in-sequence") {
    document.getElementById("modal-title").textContent =
      "Formulas in sequence ";
    loadModalContent("sequence.html");
  }

     
 else if (selectedTopic === "formulas-in-matrix") {
  document.getElementById("modal-title").textContent =
    "Formulas in matrix ";
  loadModalContent("matrix.html");
}


else if (selectedTopic === "formulas-in-modulo") {
  document.getElementById("modal-title").textContent =
    "Formulas in modulo ";
  loadModalContent("modulo.html");
}


else if (selectedTopic === "formulas-in-logic") {
  document.getElementById("modal-title").textContent =
    "Formulas in logic ";
  loadModalContent("logic.html");
}
else if (selectedTopic === "formulas-in-geometry") {
  document.getElementById("modal-title").textContent =
    "Formulas in geometry ";
  loadModalContent("geometry.html");
}

else if (selectedTopic === "formulas-in-circle") {
  document.getElementById("modal-title").textContent =
    "Formulas in circle ";
  loadModalContent("circle.html");
}


else if (selectedTopic === "formulas-in-mapping") {
  document.getElementById("modal-title").textContent =
    "Formulas in mapping ";
  loadModalContent("mapping.html");
}

else if (selectedTopic === "formulas-in-vectors") {
  document.getElementById("modal-title").textContent =
    "Formulas in vectors ";
  loadModalContent("vectors.html");
}

else if (selectedTopic === "formulas-in-commercial") {
  document.getElementById("modal-title").textContent =
    "Formulas in commercial ";
  loadModalContent("commercial.html");
}
else if (selectedTopic === "formulas-in-calculus") {
  document.getElementById("modal-title").textContent =
    "Formulas in calculus ";
  loadModalContent("calculus.html");
}













     else if (selectedTopic === "formulas-in-coordinate") {
  document.getElementById("modal-title").textContent =
    "Formulas in coordinate ";
  loadModalContent("coordinate.html");
}
  

else if (selectedTopic === "formulas-in-quadractic") {
  document.getElementById("modal-title").textContent =
    "Formulas in quadractic ";
  loadModalContent("quadractic.html");
}


    
    
    
    
    else if (selectedTopic === "calculations") {
      window.location.href = "mensuration_calculation.html";
    } else {
      modal.style.display = "none";
      modalContent.style.display = "none";
    }
  });
});
