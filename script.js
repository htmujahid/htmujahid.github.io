const projectsContainer = document.querySelector("#projects-container");
const seeMoreButton = document.querySelector("#see-more-button");

async function getProjects() {
    const response = await fetch("/data/projects.json");
    const data = await response.json();
    return data;
}

async function renderProjects() {
    const projectsData = await getProjects();
    projectsData.forEach((project, index) => {
        projectTemplate(project, index);
    });
}

async function renderTopProjects(num = 4) {
    const projectsData = await getProjects();
    projectsData.forEach((project, index) => {
        if (index < num) projectTemplate(project, index);
    });
}

function projectTemplate(project, index) {
    const projectElement = document.createElement("div");
    projectElement.classList.add("mx-auto");
    if (index % 2 === 1) projectElement.classList.add("lg:pt-20");
    projectElement.innerHTML = `
            <div class="pb-8">
                <div
                    class="min-w-[320px] max-w-[450px] sm:h-[255px]"
                >
                    <img src="${
                        project.image
                    }" alt="" class="w-full h-full object-cover rounded" />
                </div>
            </div>
            <div class="max-w-[450px]">
                <div class="text-2xl lg:text-3xl font-bold pb-3">${
                    project.name
                }</div>
                <div class="text-xl lg:text-2xl text-gray-800 font-medium pb-4">
                    ${project.description}
                </div>
                <div class="flex flex-wrap gap-2 pb-3">
                    ${project.technologies
                        .map(
                            (technology) => `
                        <div class="bg-gray-300 text-gray-800 text-sm font-medium py-1 px-3 rounded-3xl">
                            ${technology}
                        </div>
                    `
                        )
                        .join("")}
                </div>
                <div class="">
                    <a
                        href="${project.url}"
                        target="_blank"
                        class="bg-primary-light text-white inline-block py-2 px-4 rounded-3xl font-semibold text-lg lg:text-xl hover:bg-opacity-90"
                        >Learn More</a
                    >
                </div>
            </div>
        `;
    projectsContainer.appendChild(projectElement);
}

renderTopProjects();

let isSeeMore = false;

seeMoreButton.addEventListener("click", () => {
    if (isSeeMore) {
        projectsContainer.innerHTML = "";
        renderTopProjects();
        seeMoreButton.innerHTML = "See More";
        isSeeMore = false;
    } else {
        seeMoreButton.disabled = true;
        seeMoreButton.innerHTML = `Loading...`;
        setTimeout(() => {
            seeMoreButton.disabled = false;
            projectsContainer.innerHTML = "";
            renderProjects();
            seeMoreButton.innerHTML = "See Less";
            isSeeMore = true;
        }, 2000);
    }
});
