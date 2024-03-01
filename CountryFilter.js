const PrintCountryDetails = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Filter countries from Asia continent/region
      const asiaCountries = data?.filter(
        (country) => country.region === "Asia"
      );
      console.log(asiaCountries);

      // Filter countries with a population of less than 200,000 (2 lakhs)
      const countriesWithLessPopulation = data?.filter(
        (country) => country.population < 200000
      );

      console.log(countriesWithLessPopulation);

      //   Print name, capital, and flag of each country
      asiaCountries.forEach((country) => {
        console.log("Name:", country.name.common);
        console.log("Capital:", country.capital?.[0]);
        console.log("Flag:", country.flags.png);
      });

      // Print total population of countries
      const totalPopulation = data?.reduce(
        (acc, country) => acc + country?.population,
        0
      );
      console.log("Total Population:", totalPopulation);

      // Find the country that uses US dollars as currency
      const countryWithUSD = data?.find(
        (country) => country.currencies && country?.currencies?.USD
      );
      if (countryWithUSD) {
        console.log(
          "Country that uses US dollars as currency:",
          countryWithUSD.name.common
        );
      } else {
        console.log("No country uses US dollars as currency.");
      }
    })
    .catch((error) => console.log("Error fetching data:", error));
};
PrintCountryDetails();
