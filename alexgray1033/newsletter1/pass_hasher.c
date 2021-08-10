// Include the needed libraries
#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include <strings.h>
#include <inttypes.h>
#include <stdint.h>

// Mathy numbers known to scramble numbers well
#define FNV_PRIME_64 ((1ULL<<40)+(1<<8)+0xb3)
#define FNV_OFFSET_BASIS_64 (14695981039346656037ULL)

// FNV-1a Hash Funtion
uint64_t fnvHash(size_t n, const unsigned char * bytes, uint64_t initialValue) {
    // Bitwise XOR each character and multiply by a “nice” prime number
    for (size_t i = 0; i < n; i++) {
        initialValue = (initialValue ^ bytes[i]) * FNV_PRIME_64;
    }
    // Return result when done!
    return initialValue;
}

// Main function
int main(int argc, char ** argv) {
    // Start with offset
    uint64_t h;
    // Get the salt to scramble the password more
    const unsigned char * salt = argv[0];
    // Get the password
    const unsigned char * password = argv[1];
    // Generate the encrypted 64 bit integer with the salt and password
    h = fnvHash(strlen(salt), salt, FNV_OFFSET_BASIS_64);
    h = fnvHash(strlen(password), password, h);
    // Print the result!
    printf("Result: %" PRIx64 "\n", h);
}