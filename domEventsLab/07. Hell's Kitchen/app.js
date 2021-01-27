function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let avgSalary;
        let bestSalary;
        let info = document.querySelector("textarea");
        let rts = {};
        let rtsAvgSalary = {};
        let rtsBestSalary = {};
        // travers restaurants, if restaurant is already in update workers;
        for (rest of JSON.parse(info.value)) {
            let [restName, empInfo] = rest.split(" - ");
            if (!rts.hasOwnProperty(restName)) {
                rts[restName] = {};
                rtsAvgSalary[restName] = 0;
                rtsBestSalary[restName] = 0;
            };
            let employees = empInfo.split(", ");

            // to each restaurant create object employee;
            for (em of employees) {
                [workerName, salary] = em.split(" ");
                salary = Number(salary);
                rts[restName][workerName] = salary;

                // set averageSalary by first summing all emp. salaries;
                rtsAvgSalary[restName] += salary;

                //set highest salary for a restaurant;
                if (rtsBestSalary[restName] < salary) {
                    rtsBestSalary[restName] = salary;
                }
            }
            rtsAvgSalary[restName] = (rtsAvgSalary[restName] / Object.keys(rts[restName]).length).toFixed(2);
        }

        //get the best AVERAGE salary and restaurant name if two are equal keep the first one entered;
        let best = Object.entries(rtsAvgSalary).sort((a, b) => b[1] - a[1])[0];

        let sortedWorkers = Object.entries(rts[best[0]]).sort((a, b) => b[1] - a[1]);

        result = `Name: ${best[0]} Average Salary: ${best[1]} Best Salary: ${sortedWorkers[0][1].toFixed(2)}`

        let divElementBest = document.querySelector("#bestRestaurant");
        let paraBest = divElementBest.querySelector("p");
        paraBest.textContent = result;


        // sort workers and attach the result to the paragraph;
        let resWork = []
        for (w of sortedWorkers) {
            resWork.push(`Name: ${w[0]} With Salary: ${w[1]}`)
        }
        let divIdWorkers = document.querySelector("#workers");
        let parWorkers = divIdWorkers.querySelector("p");
        parWorkers.textContent = resWork.join(" ");
    }
}