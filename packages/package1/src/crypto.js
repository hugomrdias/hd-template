import crypto from 'node:crypto'

export const webcrypto = /** @type {Crypto} */ (crypto.webcrypto)

/**
 * Secure PRNG - Random bytes from webcrypto
 *
 * @param {number} length - The length of the random bytes
 */
export function randomBytes(length = 32) {
  if (crypto.webcrypto) {
    return crypto.webcrypto.getRandomValues(new Uint8Array(length))
  }
  throw new Error("The environment doesn't have randomBytes function")
}
