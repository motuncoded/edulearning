import React from 'react'



const categoryMap = [
    {"GENERAL": {
        "icon": 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png',
        "label": 'General'
    }
    },
      {"TECHNOLOGY": {
        "icon": 'https://img.icons8.com/doodle/48/apple.png',
        "label": 'Technology'
      }
    },
      ENTERTAINMENT: {
        icon: 'https://img.icons8.com/doodle/48/heart-with-pulse.png',
        label: 'Entertainment'
      },
      SPORTS: {
        icon: 'https://img.icons8.com/plasticine/100/exterior.png',
        label: 'Sports'
      },
      BUSINESS: {
        icon: 'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-legal-business-and-finance-icongeek26-linear-colour-icongeek26.png',
        label: 'Business'
      },
      HEALTH: {
        icon: 'https://img.icons8.com/doodle/48/heart-with-pulse.png',
        label: 'Health'
      },
      EDUCATION: {
        icon: 'https://img.icons8.com/plasticine/100/exterior.png',
        label: 'Education'
      }
]


export default function category() {
  return (
    <section className="flex justify-between items-center  p-4 m">

              <h4 className="text-2xl">Popular categories</h4>
<button className="flex justify-center p-2 rounded text-white bg-[var(--accent-color)]">
View All Categories
              </button>
          <div>
              {categoryMap.map((category, index) => {
            
            <div>

            </div>
        })}  
              
</div>


     </section>
  )
}
