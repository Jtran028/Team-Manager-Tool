// index.html template that will receive user inputted 
// generateTeam will extract the user inputted data and insert the html codes into the body of the html file.
const generateProfile = team => {

    // html file for the manager card.
    const generateManager = manager => {
        return `
            <div class="card">
                <div class="card-header-title is-centered bg-primary text-white">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        `;
    }; // Manager name/role/id/email/office_number is added from the user inputted data.

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${engineer.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        `;
    }; // Engineer name/role/id/email/github is added from the user inputted data.

    // create the html for interns
    const generateIntern = intern => {
        return `
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h2 class="card-title">${intern.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `;
    }; // Intern name/role/id/email/school is added from the user inputted data.

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager") // returns list based on getROLE() -- then list is passed into .map -- iterates through the list returned by filter
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href='./assets/style.css'>
            <title>Team Profile Manager</title>
        </head>
    <body>
        <section class="hero is-primary">
            <div class="hero-body has-text-centered has-text-white">
                <p class="title is-1 is-centered">Team Profile Manager</p>        
            </div>
        </section>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    ${generateProfile(team)}
                </div>
            </div>
        </div>
    </body>
</html>
    `;
};