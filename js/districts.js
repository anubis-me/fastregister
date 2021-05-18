const districts = [
  {
    "district_id": 697,
    "district_name": "Dehradun",
    "state_name": "Uttarakhand",
    "state_id": 35
  }
]

const $district = $('#district')

$.each(districts, function(i, d) {
  $district.append($('<option>', {
    value: d.district_name + ', ' + d.state_name,
    text: d.district_id
  }))
})

/*
function getFreshDistricts() {
  const districts = []
  for (let s in states) {
    const res = await axios({
      method: 'get',
      url: `admin/location/districts/${states[s]}`
    })
    const ds = res.data['districts']
    for (let d of ds) {
      d['state_name'] = s;
      d['state_id'] = states[s];
      districts.push(d)
    }
  }
  districts.sort((d1, d2) => d1['district_name'].localeCompare(d2['district_name']))
  console.log(districts)
}
*/
