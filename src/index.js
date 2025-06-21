/**
 * Returns value stored in environment variable with the given `name`.
 * Throws Error if no such variable or if variable undefined; thus ensuring type-safety.
 * @param {string} name - name of variable to fetch from this process's environment.
 * @returns {string} The value of the environment variable
 * @throws {Error} If the environment variable is not defined
 */
export function env(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`);
  }

  return value;
}
