import  { prisma }  from '../src/lib/prisma'


async function seed() {
    await prisma.event.create({
       data:{
        id: '019a5b11-bd35-4483-ac90-0e05375bab5a',
        title:'Unite Summit',
        slug: 'unite-summit',
        details: 'Um evento para devs apaixonados por código!',
        maximumAttendees: 120,
       } 
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})

