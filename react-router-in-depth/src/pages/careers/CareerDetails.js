import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'



function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData();
  return (
    <div class="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary {career.salary}</p>
        <p>Location {career.location}</p>

        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates facere, perspiciatis odit, cumque quis qui tempora impedit, delectus maiores blanditiis accusantium in natus aperiam. Accusamus, minima! Voluptates dolorum qui illo quia obcaecati molestiae iste doloremque ducimus atque delectus quos commodi iusto neque harum maiores nobis, eos at velit nisi ipsum placeat? Voluptate quaerat labore nostrum eveniet, non nesciunt officiis aperiam doloribus? Minus omnis nemo, in rem quis enim dolor, fugiat est, eligendi quae necessitatibus! Quia animi neque accusantium illo, quis ab eligendi necessitatibus sunt blanditiis error explicabo debitis! Deserunt, dolorem porro obcaecati quasi unde vel delectus maiores reiciendis dolorum.</p>
        </div>
      
    </div>
  )
}

export default CareerDetails


export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:400/careers/' + id)

    res.json();
}