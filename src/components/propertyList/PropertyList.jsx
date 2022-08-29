import "./propertyList.css";
import React from "react";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVotTEh8H9-ttHXV5IbwLSswacj5hll412cw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWk48BFrZJVqhNwTnotY4aeq5vCueEgTye6g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8yufvct8XFFtFD5s2SCLTqvSix5mdvohAQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhUo1KveiVKlrlESBeBfJrtRgkpdgjNvyLA&usqp=CAU",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUWGBgXGBgYGB0YGBsaGBgdGBcYGBoeHyggGh0lHRoXITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS8tLS0tLS0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQADBgIBB//EAEAQAAECAwUFBgQEBAYDAQEAAAECEQADIQQFEjFBUWFxgZEGEyKhsdEyQsHwFFJi4SOSsvEzQ1NygqIHFdLCY//EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAA1EQABBAAEAgkEAgIBBQAAAAABAAIDEQQSITFBURNhcYGRobHB8AUi0eEy8RRSkiMkQnKi/9oADAMBAAIRAxEAPwAVBf01OX80dhI1AfPIZnL5U5dYb3pcJlUIPQGFeEg+xI+2ghKGr5C9hOyhJpqaLqd7PBQnHfz8g5TpxgFzv0zY8Pf6xfK5eY+3iLXIgAHSub+HrlFsuzg5J++Wu8RWh9/kYZWIBw7dGjrXLj8EpqDzUIrmyCNvUj74R9Auuxy1Sw4BhJ2hsIQaRBV1lQT9qf6R6ninyPqI6mp3mKMY2nz++UVtcrVJbJm+98dJXwitK/sk+8dJm/pT5+8daleExbIQeW4iODP/AEp5JB9Y8TOfZ/KPbKJtcuZpq2ylH00oR9tFUxGefn9Xi9cnXEDu1/aOSn7eK2rAIdUscf5T6jjHndO9B0RF+Dj5GPQj7wxFqyGUjOn/AF9jHSJfH+U/Qxxa0BtNtU/vwgWWsOfCnIVyGn6niVyd2ZLn5v8At7xorpseIt9TGYu5WXw5/SNXcttCCMom1UpvabsCUkxmrbMAOfnGntd7JwltRGLvGeST8USoCqm2gbR1hdbJzhqV3jLXSOlrP6tnv9YFnzCSc9nLU5RClDrI3B8vhoBy+6xXTZnuFAOB+6x0s7z0GUVq5b6dB9/SJtVX0RJadLNf8B/NOfWHc1PhP3uhOiW65LayG80EGHNqOFFX5fWOcLKq1tkBYybNZSmKVYZqzhSRiJfKqUuR+kvRnMd2NSiA5KifEokEJQDRnIGRGRqMQiy/LuSMSg1FKVUsHJJfzPXmFtmVjwqJCyrEkpCsKVFDVJdvgmEF82GsUgmjmFt4JmSGN7LHzj1Dny4bi03FnL1yjhckANBBmYJRUUgBCTRNRhTl5COLJPTNQmYmqVfQsfOG2tAWUWgGllJ9n8R4xI1irKgn4REi3RJX/FPNU33fonpAIFNmcZaYzwULpX/qDoffZEs90FRUO8+Et8O4HbsMLlpK0rQQaLUq2F4Zf+gH5yeQjpFyJ1Kz09o4sKmwgJcwQbZ54GsHSrll6gniYKRdMofJ5n3jshXWF1ZL4KRQxTbryK8zBcu70D5BF34GX+RPQR2Vdays0xSVbo16rGjRCOghdfizKQChgSWcAReKAyPDGnUrjIGiys+SN0XS0PlD67bNPYKnTigZhISnFzJTThnwhxIWg65aqLeUAlLWuysOf/128TQPdaKwOcLIrt+eqyS7GsDFgUBtYxT3C9Eq/lMbubanHdoKSR+bEUnoQYy9uvaYglJlISRsKuodRHODYaIzuLWmiOB0Nc/6VZX9HulglzP9Nf8AIr2j3uZn+mroYaXJeaZoUJikpUCWoajlqPaGRMsfOTwQr2iZICxxaVePM8WAsx+Fnf6Z6fvHn4Gd/pnqPeNiLOGdyzPUNAy7UgFgHP3vhR0jBsCezbxNeVogY7qCzBu6cfk80+8cJueb+TzT7xr5DLLJB5Vj2YEpLELPBH7xZj2O0Ng8j8o9xU9G7qWYkXbNHy+afeCUyZgzHmIehaPyzP5B7xFSkkfDMdiflo0Fpqjo39XiPykMuctalJT8pbPfHM6wTDs6xd2ZRimz3CixGTbTm8aiXdgPyqG11JHoDB8SxrZCBpt6IMWYsBPt/aw6rrm7uv7RSq6Zm1PU+0au8kIQWSQfMfR4DkTEk1S/BWH6GEenizZbTYwkxbmA0WcVdMzanqfaKjdMzanqeeka1YS1JZFWcqf04QNOlsCYNbUrICw0U9soAXJr/k+hQPrF94TMSAQ+ahnmxZuJOnGOLOod5Jp/kn1RFSJJRLwrU+KYSK5AlgB96mLb7KI3ZXgrP3lNnTFEMUpIcKIZIL6k0ybz1aKLNIBISUpLfmBAXiUkLUOJCUpxGrPDCdZCpRODFMRMDOPlYEglWJtpNDo+3q3SkoDUUysaQWJBJLfEp/EXqNlGjoo2MFMFBNOmaRlb88/Wr7VVbbuQuTgYpVVWFMxnWoYikmrudoO2F3Z1M0TFJwGXJSlgkl6kggvq/iLilY8mWlZJwhZYMWIAcUp4S4YnxUyyoIJu22lxnhyyaiQzN8oGb1fENrArXNLtDqlJcE685Ovzv802aJHrxIYSuVCBUv8AV5e0cWCQhCWxzFFyXUyj5AaQHcs5M5GKrih9x59IaCybCYVdYNI5jA0KuMv8pCubHpHKELdsIbea9GioySnTnBlntB+ao2mnSAnVRkrZehJGYGuR/aJZ5iVVBpvpyfWO7StZBaUCn82PTg0KLPbyf8sJYu6pmdX0BMVrt8FDi1v8iB2lO5hCQSaABzAtsteFGJKSSWZwRnHhvk//AMeq/wD4gSZbiVORKJYh8S9dzc4k5q0CC6SMjR7fEIi7J6pj4ks2oBbzjmzKTNmrUoeCQph/uap3t/8AMSzXgWIaWBUkJxOdXciA+zEzFZ1KSfimrxcXA9AIG8lrTw2H/Kwf/kEd/Uj4ZrSLsH9IXtRNWoOkkD8tSqgck6AQssnaFcuWCoJWSWcnxADnlXMiGva+YyFKp4WbVq4dda+QjBTZpevr9Ifw2VzCABoa8P0ryAh13ut5K7QDCVKl4WamJiXDjC4rRjziy/5qZ1m75OaCHO1KmDciR5wiuTs4tYRMWcKFAEBql9W0EPb6sybPYp4BJBSBXaVBIbmYFI5kcsb49w5vgTRHeCpa0uaQ7YgrJ3LeCkzkBOeJ33fMDyePodmtZUSANBrtyj5v2Zmp7xRLOzB2pR3GzjG4lWkFCiOemgyjvrT/APuGsaa0F8zZN+ScwcLThnSFtm6HgEXOtSkvQgHPe23ygQEY1LAYYVKFX3DziC2BRolwM3/aFNutxQVDCSlgCCWzyY8jAMzQMoGi4A8kyTeIlgJR8WqgXguxW0qByf674QSsCssb6AsX5iLbmmrxqBQRWg4uzcoXxDszTWhGyZEYB28eKcJvA7B0gqXbAyt4IFKV5wMmwlBUTtc0cJBNHimfQ0yhLpJmgGynjh4H6NAUu6QJaiUOFLNS+f7VhzapwRLZUwk7BkITySBVRYQvttqD0yghnfRfIbJ5n2XNwzS4NboByHurrTaXgQzoFXOioz4Vb9xtOltBObHa64Tl6GDZ0olJjN2eaSY00opwviDlIeu7KNXCtBbRXn/qUQzghGon4cBP+mv/APMC2y04glNXDqYZ7K0I01YVzEDLtJdCWySsZ5xJqhjM00UHYbqnZnUwxG45ttK89P2lQMsd9fsiLDaT4kpHiJC3OxQzO9wrkBHt6yjhB+JquWZ0lwMiouTp+XrbdaD4lKGEsgM70CXfqo8gIItK2BLO2fDbEsFW9x59gF8glWHI61lbPOVKBQlBUAWDDI7CB8LUz5UjmwSCS+EFyTkknSlThUQ1W2jYWbqsUskZMCAkGtAC7VzJUTi3QRIsqUZZ0fiAz8Wo+dBEwwxh5e3c7/PnNNuxTaOUalWNEiPEh2ln2sd2PtCApYBPjZgRV/ESOlY2CJopvjE3NJ/DKUub4UstQOlGACf1Z02NDzs1eCp3erUrCHYSyMksCleLmoEe0KF4dRHFPystxcNgtIgxxMkg5QquW9UTzNKC6Zagh9CakkHUZQ0kznfYC3GgL+cUKCAu5aaFJdjSvrCGbMCVFJFQWMaKWrfCG9ykKUv7oIswcAkcdG6QNDd727UMJ4fKOSuKJtoSggLUsEgHCgDXaTFzlzhKiRVlNpsI+sMdGAcuYXyvXsSYwgyg5u/Kct9uunXVd2qksmu8EQJ2HvAAKkKLd4pa0H9QUxHEgAj/AGwwUsFGL7qHHrGJvSaJa2cg1UMxmtRcH6jZFY8K3E54nGrG/Ig2D5nTimcJI6ElhGoO3iCtp2uf8Ova6QBt8QL+RjF3cwmpK0Ykghxt3Qxs3bRJT3dpl96naGxcSDQneCDxjpF8XYlyJc6vy1PmVfWFmmfDNdHJGSSbtv3A7DnY7wOtav2PIIdQ5HQrR3dPWJgTLwmWFPhC8WDax2Qm/wDId+hZFmQciFTG0I+FHHU8t8J7w7ZKKTLsssSEHNTgr5aA73J4QgQzGrmutYa+m4CSSUSSimtNhul3zPZwG966VrWeZoblbr19XzdX3LaWnDn6RuuzlsBKpSj8YpxGnT0j5fZ5xTNc0r5ZRppU8ggh3FQR1eEvrIL5g4ctO4n8ra+lAPwzojz9h+FrfxndLKVCm3bsaOb6tqAMJ1rA9kvmXNSEzhhVotvCeOw+XCJOsGL4FhQOoUDnnqYQ/wAkVT9O32OyqMOWP+5cXZahjTtVRI1L/wBo1tgmCWCQAVn5tnD3hVcN1IlqxHxFmH7Q0tU9KQwAiBIS27oJgxBz9Rdrufb6NpqNvGE9ptj/AEim02mF86dCcuILtFoRYcNRU20mBZk2BFTopVNgV6o4bSIWuKVTIqM2LJEhSshz0hiMWdECZ4Y2yrbFN8YG1/R4eTFpKcWEFqHbuMALsPdJCgylEHdqKDZETbJiHUqSoparVDGNOEFg4rz0+IbI/l83TO753jl4siFDrBt4WRRmJQk+FeHQUFQWpSleFNkJ7pnhS5RNAXocxTIw7vG9gggvRwPP94NC6hqknngmYmDEvin0Aj2ZNABO6Mn/AO9q4yd+hHtFwvxJFS2XR6/SIZiAGnnr5k/lKFyeSEJAFA7V+sdlUZg38AQc2HsYotXaBlBi414fbnnBWTRsbQUZgtQqYHiR88n9ojiLKArlsiQcTNpVzLaSFJImBYBSkDPLUk/eyF03GiTMCUoVLUpleJlIJCU+JOoOzfCq03qVLVIQDWYy1NRu8KQkcqnc0cdrXRZ37lYmFfhmIqlScZLLbUCgfZGVC6zGOTPUt/HUtGJoJeD586vmDxB0s8aItei+UWeXMkITgWs41YQwCSEpGGuZqd0aXs2ru7JKcHEtPeEAVAWXFNuFo+RT7ZNJdYLlncMS2WcNezN8GWpSJjlKi4erEhil3o4LAvB8Q6QROLN/nmiNiptE8dvT3X1c2ooSgAh1TMPwkUCiV0P6Qa7S+sLr8NVbiPoYXWO3d5MC1EYZaAzOA5UCpWZzrqaQdap6ZhLEF3pxpF8I/Rp5V6BZk8zWvaSa+7yBooC97HMJM0J8BA8TEgNtbLnBFjUokFgfC5IFXwx7LmzZScCVkDYatxyMeptExRczS5GGjBwQxDbxSsNubGJOlzbEmvNVLmGAQZm6aWCbPDRtX7da9lqIlAkFi2HoIEtEpKkICwlQwn4sqrO6Gl5W4LSAkISAcFVYQHGFi4oRmzUbMQntJIwh8kiocg1OTaRnSymQF22pRcRBkc99/wAhe+xLrSa9+ygUEqklIKqYVE4c2DEfURk5l2TQH8JBf5qhizFwI+kpnUQnEzKByL/HCez2Bc5wJjKMxSUhQDGrCumyCCV9DXhxTMbAWArAy5Uwh2PUD6xYiTM3c1J940Nou+dZ1GWtCSpyQ1Q2ZLs5L6RWhT5JS+z7Ec7FOB+3UcCNvVEEIO+6W2KUvEmgZxqPeNXYp6UGYtRDkU55/fGFqZS3+FPUR4cYLYU9Q8LzyumFEadX9o8bGsTmyWgCQlANXFN3GGV0qaYCSaAkZ/EzD35RjbTNmg0I8j9muUOey88lSypQJSAGGQf+0XOOfHh3xjZ13z2r0RY8JHNM0kfjmtym1BI+84U2q1EkmKJs+BZs2MR0pcKXpI4Q02up06Apk2OZs2BlrigCOAu1LjzG9BHEuWpeWW2DZFiAzrzaG4YC/sSWIxLI9NzyVFmQorAKF4auoggZUalatDdE5AADgeXGOrPKYMkU2Rn+1ylSjLCaOFZbiNOcaAia0U1YU8rpDbytFaLSFJABBZ6vvEHIngygmtWrpU5dA8fProtUx1uSThoDqY0ctaklKlrLKPwUKBkEkUcFhXjDmHDqy9fsFmTgXn6vcqhEwpEvCah+FIsmOr41OdgiWOUCtFXZJ9RF8+W6z96RfDwxu1d+t0DEFw/j80V/4QUAGg9IrVZd0Ofw2XQx1+GhlvR8WDwCC6PVZ1dk3QNNsW71jUqskC2mylvCATvi46H/AEb/AMR+EPozzWOXd9TTU6n3iQ5tNn8RxCtHyzasSCXF/oPAKMp5ogTQqelifiUMiPvjHt8z5SWGOdKriUhaSqWS/wDiJFKHjrlSFlx27vLSl2qpQo+QBPXKAbwv1SwELJUhJOEKqz6PhqOMYLGuMrgAdGt4dZ/C04ZGta+yBZPHeq6qPl1HSifeEuyziAZ6goZfwnzz+bhFlkslmCllM2Yqgcd2zMGHzboRrMpRBPhI2Cm6hDQTZ5wllSTidSXqNmdRxEMHNGb1B6wR6gKj3MMZqjQ536J/YDLwrxGY5SysKQQBioxerwWm8LKmqTOSQ9U4wRtqITWG2IMuaQo+FCTVJDDEa78j0gJV4od+8UkF/kVz+kDBI29P0pZCwNAIGgWh/wDZWEZzJnNSn9IgtdhP+ZMI/wBx9oz0u1SsXxkkjCAUq1YDMRVZbahIKVJJZxQDaa1ji5wOh8lboIf9QtWi03e1SujtVR6R0u1WRKvEotgSEuDltcGr/SMsu3yyCGZ9cIDVrV4OvGehK0gql/4csDEQKYcxFDbjRPkrGOMtJypsbdYyUsrxOGzzxAjPfCqyXgvvVS6sFKZQOTVFOUUWLuzMS6kFQmCgIf4qCGfZ+SmZacGJNe+DOHHhOlDmXygbwA0m+CNhyyJwcBxHl+gqb9mS582SpYB8KydygwPn9IVW6YAThS7LUkOQKYAQ1HDGtc8o5v60mQsUcpUoEHYfi4fDviogTFEg/Et8T0GQJNBQVpXIx0LKjb3+qPO0RzuYDpwXC5iwspOwaB3L503RSq0zMRSG6CCrKhLgfmwM2VcRDfuRsj2XKSZiiMmBGjv6ZGDZQhBzkMbZNbR+AaGfZy2LVjC2phbz9oqVZx98H2V8o5sCsE1vzAjm4aF8RHcZATeBlqZt/LT2cuKHo+dW8n3P/ePJihX70OrfSBcfQ565ZZiMtgoWvRl1igvLTtGv7H6wFarRhBMELq5J+nvCu1qCkrb5QerGjf3zg0bMxulSSTK2r1R/YicqYJxWa+A+aqDYI1cgDUeR2R86uLGEeFShR2Bbhoa+4i2faJjnxqPMxszsyyGq4c+S8m17stnja+j94lOSfRPrGd7X22svAsH4nauz94wk+ce8qSaPUvBdjleB9S/tFMtBVBOYJpYpq5hUMWaWG56Roi5EpOIKCsi35QXPBwKb4RXOGUMqtnxjTfhye6SkYWdvImLMzatbp+a0VpA3Kb138N/ZV3YghQ3BvOsMpdmKiTpAV2j+IQS5GJ+oh2Cwg8cjmi0nJG12hRaRTr6x40dIVTr6mPFGJzaqlJJ2nvv8KJZwhWNRBqxwhnbfUQvtfa6WhQHdrYpd/CC+EKw4Sc2I11jULALOAWycO3CM5fPZeXOUpaFmWtSgpVAtJIyJBqORA3GDNezQEKtIFd4om/xEqDKYjFhfLWsSO7NcBlpCDMJZ6pSwqSaDTOJHFzeZVcqTdmC09J/KlR5kQCuxrwhRdjq1Dzgzs/aB3ijgZkmo4DManmIa/jlqSyUg8XHkQ3mY6A5Z3kDg3q4vPuhuZcYs8/ZIJdlOhg68k4VEa5Reiwr/ACHlX0hD2uta5c8MRUPTMVZiNtItji18jADoM1+SrA12Ug8a5cLP4Ty7pn8O0HYiWPNRaKJZxs7UfPTIZQJcFsK7PaaV/him8q3xyJRDh3+Whd3d6wi6O3Gufta0Q77dd/2ibOpPeAAlSi3i55APBFmQDnv/AKjA1llFK5bJYBSSeRzeOkz20+3MQR9/crNdQKItLULfOkHrWLb+SkzUAhROGWwTkA2ZEBT5yVDE5HiBO4UqG4QVf5PeABRbAg4QKlhmTs3booBTh3+itZIUulu+DlLmbkzn44d9nZ6UWxPhZ1rD8QRv1bpGTue2n8SkEkgzWA2OrOHVlW80gP4cZI57eYgExoV1IuEYHvyniaU/8hyAJ7/nAPPI+TdYQ3clMxCUk5qNWOxq+L78oZ9t7SZvcq+YOFcQQ56MecILEVd2MJrjV0YRGGJ6Mdv5VpWkOIduND3aeyeWWSkTMJD4MIHKr/WCpElImLSHyT6NCy7FlUwvnR25w7x+KGQhbLk5sd/9IH0hVeUxKFpVV3J9teGmkPJiMQ3wonl5iNwV6RYqWiyiUWwGXjYsQTQE5EpNBnr0gJV7S9MR4IU+TZdI8n2koIDO+nCO5NqC3bMZjWM18FMsNNXz/tb8GLEpyZgHdYu+sahDTbUtYDIKU4nLsFkZsA9NkGTbvC0FUoUIqkM++j744mo2ZR3YLSqUsKSHBoRtgUcuwpFngcW52nWuO1cvmvMoDs5LUAoLSUlKQ4IIzJbZsbkIsvOQEgqALekMpiVAKUpRUVEZgADcI8lrehDiGp8UTLn+eeqSwuFD8OWHma6lj0rBnJUK5NDWQoFhxjq13EULC5dU5sOL09o8s1nIVUGG43skFgrKnifC6iP2jpMzAlRaoFG3ZQ57L3sqdNTiDMDhDGo8LnEd/rCpgAUuWOb5wXdSzJlyyWxBRSN6QQA/3rBRXSVxLgB4BLueQzuJPiU6sc9InEGhUVgcXdvIw0nLhDdAK5gWQKAkNtO3rBsy3AqIFSlSUkcW+h8oG51BWAs6LQS8uvrANqvaSj4lh9gdXpCu8byJJluRh0yffv8A2hLPXBP/ACKRllLNKWgPaaz6lQ/4mDLLecmb/hrCjsyPQ1j5zaLQCsSxVRIHByweAPxFaFiOvEGCZQUMTP3IX1WZmaRIzdz3otUlJUXNQ5zLKID8hEimVyMHjrSO4rVMBKVqWSEmpJZ6bdX9YZpmqaqlHmYB7M2crUtZc/KK6mp9B1ju1z0d0tJUyks9dQzDnHYSYOkkA3GX3ViwODOR/KlznFNmEku3w88+X1jM3vZpk1YYOWNMvmO3fGg7OLS6ppVk4Z2rmSfaE16LJwhKVeGuIb/TKCnMS1o13/vgjYst6Ym+A9vlo67LGuTY7QVeEqKCKgsz1LQFa7YpCkswAeo1d611rpBku1KXYZwXoUgbTvhRbkOgV+AgV1ozwGJj9c9XdabbDr7FDnWBXJG3HeJM9Ca+JQhmi1JJIOlKwhuFLWiUX+bLkYIU+JXE+sGp4kot4e5VTly3fH2Te0pTgNcyMuMW9pyrvxhyCUwtskxJCkmooWz27w37Q+vmXLM442dhm+zcYUmdlk2+UEZoeWU0pBc6T+Jllv8ANB/7PGr7JS8dtmIVkUzQ3EZ74X3fZ5QmoI0UG8R2w0uGciVaRMerqCqnIuCWZthz0hSY5mkdSJDHJsNyfZZntclUubgNCkq+g6GFlkmkSwXbxq0fRLiNJ/5SkgzkqDVTWoGRbXc3SMtZUfwkV1WfQQSBwMTSPm6PNN0shJG+vkPdN7mnDEo6EiHCZlYy93TQkKcsBthtItIIBBBfWDIKdJntCu1q/iIUNiosTOgKdN/iJ4KiVZg1Ti7LPLmYjMlrmAYWCSAAa/E9em+F826Jv4g4JK5aBUZsTlhxFJqS9G+kMri7TfgZc2Z3RmYlIBZQSwGJ2JBepFKRrbf2qlzbOFyrUlJWgKw4gFglLhJ/KQaGKMdTMtDc79pRCLfpoVhZagqLZMnxDiPWEq7QUpcUII/qhxcNvTOCVChcAjUF/TfGfJCQA8dVrbw+LEjSx38qPfojbzR4W3pigkAOaAQbe6agfqEXzpSQAM6VpAZt+r9on0/SLTmfQJSi2gunCss2SdsUzZBd2IfTYT+8NyI8mJBDxaDFBrtApxmD6VhDj2dSTTVEnCPiolt7s3WO51scywzYQz7SAHbm2+KrbKCMRUSxLgjN9B1iq02xk94oM5SEpaicaanmEpPGNRjg92fkbHbQCw24YN+1w12+ePknly2pKWcgOGD7TpC9BJtxbInF0DE9QRzgC0WvEyhRyVNseojQifhUWSHKmLUYYcT/AMx/7RV5oILDkvTewvb1OBRUzlRbIhIcsSpRoISzrSHKXDg1YuOR1EaKcXBB3+pjI3xIEtTpB8VRWgb4g3SOjnDpXNPMoT8E2aIEXmrT5e3net8EJYFrROxKAwlYJJCSQHzBqRygedaFEsUIAfMISk9RWLZk6kArXDwHFZAeTutVcqv4Kf8Al/UYkUXOv+Cn/l/UYkBdJRRA3RN+y8vBKS+anV1LDyAjP3xZ5YnmrutyliCxqQ4JJ25UjcyLvDJIUchRgGDZCFl8Xd3ShNQRUeIkB2oA5pTKM36TK0Yp5O7h9uvG7A5eO60OjY4Na40Bv4dWqRTbpRLlmYahSkmWOZcnkS3KO7nUkTCpamlJlkrS5BVQsAxrWKrch8OEkuSSwdIrkmv0jqz3H3+KVjwFaDgUp0pxuCkKNXBDhmEP4gfe4SaCztrXZrz69EliHNM7WtOagBZ49Z6/ekDdN5GepUoSpaJa1BwSrCDo6ndhmY0Um4JBHwoLZq8eE/7Q7tvgu8LmslmlpEskKQkEKCicRSHBIyLkf2hIJ02WhKlBScdQ5rzGY5xcyOjOjiOwnq361tYLDQSD7wNNrA60bPwy0iUlKEAKxOBV8nJLkRhLZeJClJCA4UQ6nNQWyNBGhtFpUsw3sKJRUFKlOtAACwAoHwtU7c8+ULiQBxJ1vfXj180xisIym9HQPKtO7kfVZ+77FMKXC5anOigw3EEUjRXrZ1qmqKQkigqz5RVdV1jvpmM4HCSgkgB3U4AB0pnDr8IVqUSzPtrkN0KzSlt67dVJF+Gjbo8EWddfApJYLKsTUOgDxA6beMEWSSVTls3hStfLEBXrDmVdgDKc03j2gnsxYUCZ3hclSVpqaM9acBAP8glpJUxsjhcHR2aIOqwnbdRnGRtQlaTwdOHy9IGsNzLXLQ5wgYn2lzRveNrMsIRMmpIyLpJGhBY/eyAJktRGIB9X2MAadco1fp7GytomgDp32fJL/UZ2xTHoxYOvp+Vn7TZEBpQTmQ6qskbSWqd0dS7tTKQgCaolRHhACg6jViRQAVLxoCsFAABx6l6EaMOkey0F6Ea0zIbdtjUODyjU/wBXX9JFuMHK/ncs8hUsFWKYvM5JSW6mB1TkkgpmE6AGXXyVrGlxKzduj/vHgYkZkUGjuaBtzxz8I5orTl/ZV24xjjYB8f2EiSrwL7xThj4WKXowDPqW6axTd4MxYSycORIz+EkU5Q3myAaFIIBqKNt+keypYHwADJ6Vf7eKOwhDfur++5R/lgnS+9KLzs5TLJS7OH4f3aB+zCu7tEssrxKSk1AFSGJ4GsOZqixAyLPTbHNis471Bp8aTl+oRnYz/onJzGqcws3SfcOCfXnM8Sd6/pBADp3D6wqvtRxpL5Kc8NfV4MkzIxMQDYPzdepwDh0VDcH1VqhHKRHeF4k1SEDEogAaksIVGhT51CEt1mxoUg1Bq7Bw2THSMneaVY0ynZIYAngCTwxGNFP7TSElgX4JgU3rZJxZQD7xgPWNGCV8Z+5prs/KQmgEn8XC+35ry70Bd6/4qQpsOEgcgK+UNLvtBUJijqs9BQCKrbdb+OUpyxoci+bGBrrmYQUFwoOS/T2g5mZIwlpWBiIJIZAHiuR4H510V3ed4rE1aXYOWaAO/KiQWUWLYjQUd4IvZK8UwmX4cThdKCn79eELbMrxh8OvxfDkc40mhpN0Fk53CVupqxxPNUhbiPJclS1BKQ6jQARzJlqUohLFiXI+GHl3AyapPiOZYdA+QiJZgzTihOZleRytNLLdqZaAhS6jNsnJct1iRUm3LNSfIRIyi+Qm7CZGRaWeSgUypCm8r0JQQQCGYjcYPmuo4csRYnPPWGQuaR3EyUCcUxLFZFXzSeAIBaFYsM8OtzToRwP4TUoc0VxWERagYMnWpJ6f3836wstl3TZKsK0kb2oeB1g+57mnWhQCQUp1WoMAN35juHlGySQDeyxDASa4ob8Uy3UQEIDtkH04qJLxRPl2mee8EtWAJxAnLCclU+GN7enZ2UlKQhRSNTRiwapIauzdFdjsxShPdlIZ2WkMtQxZKYVG5olpikiDy7XUVWg3r7tRr5LdbjHNc1tbDfie7TjuddOW6Sdnbus7Y1la1M5GHwirZAnF11ygtFuQl8IArRgzDTLWNLZLCkygFJIUzEihJ27n4Rg7dJUhRCgx1Dux1DikIwyjMTx8R3LTwLxI92c6oi8JyTUQ67KoXNlKOeFTeQaMmVRu+yiBLkgOHUcRbezDpEYmQOZSJ9QIEYb16K5d3zM4Xy+8lpC2Iwqeo/VrxfzjTqUGcmkUplS58pTKLKBGWoOfUCFA12XNWljXt+HwWVDKxsjQ7trq4+qT2maJrLSKEa8S4PnAkyxhqpDAuABrtbJ4a2W6TJB/iBTl2wto22PVSVHOHcHhHSG7po+afnwVpGMLzl1Hss8bIS7JOWg05QOJYBcDmS26L+1EyYgyyhRSQ6g20N984E78TPFhwkgEj9TDERuJc7o9Lho4pCWE92nDXrvT3SmM6WBgkawZedd2/DUbHqKsCgtRepzzNdDHX4VLVBbiYHkuFpKdopxp9Y2cy66AKQk0/wCXEHnEYlrYHADb0Q8PKJWEloLu4eyyfdo3trU7GixFmQapfr60ga8D3a1I/KfLMeUeXXaT3qRopx5OPOBY/CudCZGPOguuBHdxrZAjlBkylgHDQIg3ejf14bt0UokpExLU8Q9YemTFJsyHBVoY8sJXPeC432rTawN2WevaZ49KKOfAQRZ5gNUlxpwiq+vEtIkUPEZtUn70iXfZJiD414nI5V2xedrOJ1WphJsklc/gTK12lMmUVr0HXYI+e3neK5ysSjTROg+9saTt3aC0pGniV0YD1MY8mCYOIBufiVoYmTXIpHgMQx4BDqU3TS67xXLNC41ByjRz0ickTEfEPspMY6VD647ThUxPhND7wlOzXM3f1TzGtmjMb9QqL0lGbNIRiLKdWKiQd0W2awYSCfEoGg0fR40NpkISVFXCm3bCW1zAAogEgDIZmCNxjnmhovIYvCPgko0dffTT5SXoWtMycghIURiSBk+XtFFktywC6VKO8HPZ/aB1T0GekyApRNCDm50c0hxbLunGndrDVcZvurDspDHGwDm+dqHOQHkjW1Zd1oUqWFbSr+oxIHs1nnoSEhKqPoNS8SFXR2SVQSgCqW2lzIMk2sjfCiXMgiUuNcgHdemdG1w1CeS7Q8XgmEyVxb3xZsRHAwMx8ikpMFxYU27zDVSsI30gSZfctOTq4ZRmba4PxYubmBhPMNx4VjhZNrExE0sTywto+P6Whn9oZivhCUjqfOBJmCeyZ5VuUksRxA04QtTP3RclcFkwMEjcpaO0aEd/9pVmKmY7MCnVm7GWeigSoZglRUPaHFnulKMozl33muUfCaapOR9jvjV3deaJooWVqk58tojzOO+nT4f7rzN566do18dlpR4wTaE6/PFXCTHCUJQGAA3ANF0yY0DqU5imDwTpTmd/H1+c/BHbquVEmK1xbHKhHoGgAUNkRZjtdKPdpWA+EseCteoHWEt0ygVELWlDp8LmhUC7E6UeNjbUhSShWRBB5xgLbZDLVhVUA8iPlMUdlic2YbjQ9h4i9NPwnIWnExOwrjoRY6iNTfGjv4pnbZCpI7wsCKpqC5cM20O0aeyTZc61SLRLnTEGbKUtSXBQcGBCkMapNKkHJB2mMApKSAC5AyqR95QXZp2FJSk4fDMSC5p3oSFV4J/7GCS42GTewdRdaeRJ60vH9CxEYOWj1Xr5gDzR/aCembOK5ZdK8jtwkpJ4UfgRAUrEhaVM7KBpuMX3PJdPdk+MOpIUBhI+YJU9dDlBFqkqlpK1JIAo7U8o0InROZ0ditt9x88NlhYhksMpzNIO+3z97haFIcPRmd9GgG2EpNQ2zfwjJW4rmBNXS1BoHglNqUiT3ZLpLFP6SKKbcRpujz+FwuFieM5z2SNQRVGhpfrfctqfBYwQukrLQB0IN2OGnDj7o6baEILgeIaxbLvAGobLVjnGWtNsOkPrNd7SpZIqUgnmHgf1t2HAZlaAdtABpXslsFnH8iTtv2oXtvIdMtewlPWo9Ix5EfRb1s2OyqGuFxxRX6ecfPlCEcG7/p0eC9TMA+njiAqmiARa0QJhq0IMXssQysSfWA5MomG9kleULTOACegad08sszvEYVZgN7H72QuXd83QA8xFslWEvDRCtRrCOYi6Wd9XwLZWiQbj0+ahZ9NgmhaTgYAgnLSNIiYWrX1j2XMIjpSHqCx8v2gjMQ4HUeC80YQ3+KmFO2JFbnUGJDPTDqVKPJZ+7Ly0MOk2sNEiRsRvNL1VKmbe4FAIEmW6YvVuEexIq9xukNxoEomz3csh28xXzgqVcs0/L5p94kSHBM5jAAvKPb0shc/crtNzzHqnzEEyrkWdUjmfaPYkUOLktWbhWEaolPZ8jNYHImC5HZ9iD3pB3DLm8SJFP8uXn6IowsXL1R6V1wlRURqQxi4GJEgrf4hOAUKXQjxRiRIlShpkkGEl79n+8HhNdHiRIuUQXwWOttmMtWBZwqGXz/btA0uYohwUndhb6xIkZ+JjEYBHtxJ7x3Utn6dM+dz2uOxNVY2A4beSvlWnEG0Vlu3xyqfMZitQlkhJGIkHZTY8SJCwmfCSGHq/fbyKPJFHiGtdI0Ghfpp2a6jiui6OGzY+yObRNxxIkGhjBgdLxB7thr2rN+tYqSJ7cO2srm689ztyGmyLuK5e9IUr4Qeu6NfakUyFI8iRhYqRz5Tm4FZkYoaIdCgUkRg7wsYStSWyNOGnlEiRaF1HRekwf3QC0ILPFqJA2RIkMlxRgAiJSRDKSkAUiRIXmRYTYV5EFSVMlJ3HyMSJAGcVeUWK+bFEiO0LiRIIALXh1ZjiRIkEyNUL/9k="
  ]
  const {data, loading, error} = useFetch("https://hostel7booking.herokuapp.com/api/hostels/countByType")
  
  return (
    <div className="pList">
      {loading? "Loading":
      <>
            {images.map((img, i)=>(
                <div className="pListItem" key={i}>
                  <img src={img} alt="" className="pListImg" />
                  <div className="pListTitles">
                    <h1>{data[i]?.type}</h1>
                    <h2>{data[i]?.count} {data[i]?.type}</h2>
                  </div>
                </div>
            ) ) }
      </>
      }
    </div>
    );
}
export default PropertyList;
