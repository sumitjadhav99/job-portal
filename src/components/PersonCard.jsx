const PersonCard = ({ name, age, city }) => {
    const fruits = [
        "Apple",
        "Mango",
        "Banana",
        "Orange"
    ]
  return (
      <div>
          <ul>
              <li>Name: {name}</li>
              <li>Age: {age}</li>
              <li>City: {city}</li>

              {fruits.map((fruit) => (
                  <li key={fruit}>{fruit}</li>
              ))}
          </ul>
    </div>
  )
}

export default PersonCard