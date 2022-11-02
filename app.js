const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function drawPackages(list) {
  let parcels = document.getElementById('ware-House')
  let bag = ''
  list.forEach(package => {
    bag +=
      `<div class="col-3 p-0 m-5">
        <div class="card img-fluid">
        <img class="img-fluid"
          src="https://cdn2.vectorstock.com/i/1000x1000/36/36/sealed-kawaii-animated-cardboard-box-in-colorful-vector-19333636.jpg"
          alt="">
        <p>To: ${package.to}</p>
        <p>Tracking Number: ${package.trackingNumber}</p>
        <p>Priority: ${package.priorityLevel}</p>
        <p>Weight: ${package.weight}</p>
        <P>Fragile?: ${package.isFragile}</P>
      </div>
    </div>`}
  )
  parcels.innerHTML = bag
}

function drawFragilePackages() {
  const fragilePackages = packages.filter(package =>
    package.isFragile == true
  )
  drawPackages(fragilePackages)
}
function drawNotFragilePackages() {
  const fragilePackages = packages.filter(package =>
    package.isFragile != true
  )
  drawPackages(fragilePackages)
}

function drawPackageWeight() {
  let weightPackages = packages.sort((packageA, packageB) => packageB.weight - packageA.weight)
  drawPackages(weightPackages)
}

function drawHeavyWeight() {
  const heavyPackages = packages.filter(package =>
    package.weight >= 5
  )
  drawPackages(heavyPackages)
}

function drawLightWeight() {
  const lightPackages = packages.filter(package =>
    package.weight <= 5
  )
  drawPackages(lightPackages)
}

function drawFreePriority() {
  const freePackages = packages.filter(package =>
    package.priorityLevel == "free"
  )
  drawPackages(freePackages)
}

function drawStandardPriority() {
  const standardPackages = packages.filter(package =>
    package.priorityLevel == "standard"
  )
  drawPackages(standardPackages)
}

function drawExpressPriority() {
  const expressPackages = packages.filter(package =>
    package.priorityLevel == "express"
  )
  drawPackages(expressPackages)
}



drawPackages(packages);