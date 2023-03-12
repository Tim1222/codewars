function sumNoDuplicates(n,i,j) {
    let result = 0
    for (i = 0; i < n.length; i++) {
        for (j = 0; j < n.length; j++) {
            if (i == j) {
                continue
            }
            if (n[i] == n[j]) {
                break
            }
        }
        if (j == n.length) {
            result += n[i]
        }
    }
    return result
}