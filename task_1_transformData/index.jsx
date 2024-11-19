/**
 * Transform an array of nested arrays into a structured array of objects.
 * The input data is an array of nested arrays, where each sub-array contains key-value pairs in the format [key, value].
 * Convert this data into an array of objects, where each object has:
 * - A `label` property formatted as "Name, Age"
 * - A `value` property holding the `id`.
 *
 * Task:
 * - Implement the function `const transformData = (data) => { .... }` to achieve this transformation.
 * - Optimize for large datasets (up to 50 000 records) by ensuring minimal iterations and efficient data handling.
 */

// Example Input up to 50 000 records
const data = [
  [
    ["id", 1],
    ["name", "Ivan"],
    ["age", 23],
  ],
  [
    ["id", 2],
    ["name", "Marina"],
    ["age", 30],
  ],
  [
    ["id", 3],
    ["name", "Anna"],
    ["age", 28],
  ],
  // ...
];

const transformData = (data) => {
  return data.map(([id, name, age]) => ({
    label: `${name[1]}, ${age[1]}`,
    value: id[1],
  }));
};

// Example Output
[
  { label: "Ivan, 23", value: 1 },
  { label: "Marina, 30", value: 2 },
  { label: "Anna, 28", value: 3 },
  // ...
];
