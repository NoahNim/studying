# Given a number n, print all primes smaller than or equal to n. It is also given that n is a small number.
# n will be less than 10 million

def sieve(n):
  primeList = []

  for i in range(1, n + 1):
    if i == 2:
        primeList.append(i)
    if i > 1 and i % 2 == 1 and i % 3 != 0:
        primeList.append(i)
  return ', '.join(map(str, primeList))

print(sieve(300))

