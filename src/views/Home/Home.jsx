export function Home() {
  return (
    <div className='isolate bg-white'>
       {/*Titulo de un blog centrado al medio en grande y negrita  */}
      <h1 className='text-center text-3xl font-bold'>THE ARIBET</h1>
      
      <section>
        <div className='relative bg-white py-16 sm:py-24'>
          <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
            <div className='relative sm:py-16 lg:py-0'>
              <div
                aria-hidden='true'
                className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
              >
                <div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72' />
                <svg
                  className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
                  width={404}
                  height={392}
                  fill='none'
                  viewBox='0 0 404 392'
                >
                  <defs>
                    <pattern
                      id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                  />
                </svg>
              </div>
              <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
                <div className='relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl'>
                  <img
                    className='absolute inset-0 h-full w-full object-cover'
                    src='https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/12/avatar-the-way-of-water-cn-scaled.jpg?fit=1200%2C675&quality=60&strip=all&ssl=1'
                    alt='image'
                  />
                  <div className='absolute inset-0 bg-indigo-500 mix-blend-multiply' />
                  <div className='absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90' />
                  <div className='relative px-8'>
                    <div>
                       {/*titulo de avatar dos */}
                        <h2 className='text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
                           Avatar: The Way of Water
                        </h2>
                    </div>
                    <blockquote className='mt-8'>
                      <div className='relative text-lg font-medium text-white md:flex-grow'>
                        <svg
                          className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400'
                          fill='currentColor'
                          viewBox='0 0 32 32'
                          aria-hidden='true'
                        >
                          <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                        </svg>
                        <p className='relative'>
                           ‘Avatar 2: el sentido del agua’, crítica: un triunfo visual, no tanto argumental, que hará historia
                        </p>
                      </div>
                      <footer className='mt-4'>
                        <p className='text-base font-semibold text-indigo-200'>
                           por Aglaia Berlutti 15 de diciembre de 2022
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
              {/* Content area */}
              <div className='pt-12 sm:pt-16 lg:pt-20'>
                <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                   Pandora abre sus tierras al asombro
                </h2>
                <div className='mt-6 space-y-6 text-gray-500'>
                  <p className='text-lg'>
                     En Avatar 2: el sentido del agua, el tiempo es importante. Diez años han transcurrido desde que Jake Sully (Sam Worthington) recibiera el prodigio de Eywa en el Árbol de la Vida. Su identidad humana desapareció o, mejor dicho, evolucionó a una comunión total con Pandora.
   
                     Su mirada es la de un Na’vi y esa es la gran revelación que el argumento escrito por James Cameron, Rick Jaffa y Amanda Silver deja clara. El espíritu aventurero del personaje es un reflejo de su planeta adoptivo.
                     
                  </p>
                  <p className='text-base leading-7'>
                     Los primeros minutos de la gran épica ecológica de James Cameron dejan claro de inmediato que esta largamente esperada secuela es una experiencia. Antes que un recorrido, una historia o incluso una exploración a un nuevo mundo, Avatar 2: el sentido del agua es una osadía visual que hipnotiza a un grado abrumador. El nivel de realismo y detalle sobrepasa toda posible predicción sobre el trabajo de Cameron y convierte la película en puro poder narrativo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section>
          <div className='relative bg-white py-16 sm:py-24'>
             <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
                
                <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0'>
                   {/* Content area */}
                   <div className='pt-12 sm:pt-16 lg:pt-20'>
                      <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                         Google no piensa lanzar un competidor de ChatGPT
                      </h2>
                      <div className='mt-6 space-y-6 text-gray-500'>
                         <p className='text-lg'>
                            La locura por ChatGPT es total, y tiene sus motivos. El chatbot potenciado por inteligencia artificial de OpenAI se ha convertido en EL tema de conversación durante las últimas semanas. Es por ello que, probablemente, hayas visto al menos una publicación en Twitter compartiendo las respuestas de esta peculiar herramienta, o hasta conversaciones completas con ella. Al punto tal de que muchos se han animado a vaticinar que podría reemplazar a los buscadores web convencionales, algo que a Google parece no hacerle demasiada gracia.
                         </p>
                         <p className='text-base leading-7'>
                            De hecho, CNBC reporta que empleados de Google consultaron a los principales directivos de la compañía si no creían que el furor por ChatGPT era una "oportunidad perdida", considerando que ya disponen de LaMDA, un modelo de inteligencia artificial basado en el lenguaje natural. Sin embargo, los ejecutivos de Mountain View dejaron en claro que no piensan usar dicha tecnología para lanzar un competidor directo, al menos no en lo inmediato. ¿El motivo? Que la compañía afronta un altísimo "riesgo reputacional" y que debe actuar de un modo más conservador, comparado con una startup.
                         </p>
                      </div>
                   </div>
                </div>
                <div className='relative sm:py-16 lg:py-0'>
                   <div className='relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20'>
                      <div className='relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl'>
                         <img
                             className='absolute inset-0 h-full w-full object-cover'
                             src='https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/10/google-inteligencia-artificial-2.jpg?fit=1200%2C750&quality=60&strip=all&ssl=1'
                             alt='image'
                         />
                         <div className='absolute inset-0 bg-indigo-500 mix-blend-multiply' />
                         <div className='absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90' />
                         <div className='relative px-8'>
                            <div>
                               {/*titulo de avatar dos */}
                               <h2 className='text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
                                  Por qué Google no lanzará un competidor a ChatGPT
                               </h2>
                            </div>
                            <blockquote className='mt-8'>
                               <div className='relative text-lg font-medium text-white md:flex-grow'>
                                  <svg
                                      className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400'
                                      fill='currentColor'
                                      viewBox='0 0 32 32'
                                      aria-hidden='true'
                                  >
                                     <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                                  </svg>
                                  <p className='relative'>
                                     El furor por ChatGPT, el chatbot potenciado por IA, ha llevado a muchos a pensar que en un futuro no muy cercano podrían reemplazar a los buscadores web convencionales. Google no lo cree así, y tiene sus motivos para no lanzar un competidor.
                                  </p>
                               </div>
                               <footer className='mt-4'>
                                  <p className='text-base font-semibold text-indigo-200'>
                                     por Gabriel Erard 14 de diciembre de 2022
                                  </p>
                               </footer>
                            </blockquote>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
      <section>
        <div className='bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28'>
          <div className='relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl'>
            <div>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Newsletter
              </h2>
              <div className='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5'>
                <p className='text-xl text-gray-500'>
                   Recibe artículos semanales en tu bandeja de entrada sobre lo último en tecnología, ciencia, cultura y más.
                </p>
                <form className='mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end'>
                  <div>
                    <label htmlFor='email-address' className='sr-only'>
                     Correo electrónico
                    </label>
                    <input
                      id='email-address'
                      name='email-address'
                      type='email'
                      autoComplete='email'
                      required
                      className='w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 lg:max-w-xs'
                      placeholder='Enter your email'
                    />
                  </div>
                  <div className='mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto'>
                    <button
                      type='button'
                      className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:inline-flex sm:w-auto'
                    >
                      Notificarme
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12'>
              <div>
                <p className='text-sm text-gray-500'>
                  <time dateTime='2020-03-16'>Mar 16, 2020</time>
                </p>
                <a href='#' className='mt-2 block'>
                  <p className='text-xl font-semibold text-gray-900'>
                     No confundas el hito histórico de la fusión nuclear con la fisión nuclear de Chernobyl
                  </p>
                  <p className='mt-3 text-base text-gray-500'>
                     La fisión nuclear ya se usa para obtener energía. La fusión nuclear está aún en pañales, pero tiene mucho potencial, sobre todo después del anuncio que se ha hecho recientemente desde Estados Unidos.
                  </p>
                </a>
                <div className='mt-3'>
                  <a
                    href='#'
                    className='text-base font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Leer más
                  </a>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-500'>
                  <time dateTime='2020-03-10'>Mar 10, 2020</time>
                </p>
                <a href='#' className='mt-2 block'>
                  <p className='text-xl font-semibold text-gray-900'>
                     El co-CEO de FTX delató a Sam Bankman-Fried días antes de que quebrara la empresa
                  </p>
                  <p className='mt-3 text-base text-gray-500'>
                     Ryan Salame, co-CEO de FTX, se comunicó con las autoridades de Bahamas en los días previos a la bancarrota de la compañía para alertar sobre el movimiento de fondos de los usuarios hacia Alameda Research.
                  </p>
                </a>
                <div className='mt-3'>
                  <a
                    href='#'
                    className='text-base font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Leer más
                  </a>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-500'>
                  <time dateTime='2020-02-12'>Feb 12, 2020</time>
                </p>
                <a href='#' className='mt-2 block'>
                  <p className='text-xl font-semibold text-gray-900'>
                     Tesla estaría ultimando detalles para anunciar la construcción de una fábrica en México
                  </p>
                  <p className='mt-3 text-base text-gray-500'>
                     Tesla habría elegido a Monterrey para construir su primera fábrica de coches en México. El anuncio sería inminente.
                  </p>
                </a>
                <div className='mt-3'>
                  <a
                    href='#'
                    className='text-base font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                    Leer más
                  </a>
                </div>
              </div>
              <div>
                <p className='text-sm text-gray-500'>
                  <time dateTime='2020-01-29'>Jan 29, 2020</time>
                </p>
                <a href='#' className='mt-2 block'>
                  <p className='text-xl font-semibold text-gray-900'>
                     Sony confirma cuándo lanzará ‘Spider-Man 2’ para PS5
                  </p>
                  <p className='mt-3 text-base text-gray-500'>
                     ‘Spider-Man 2’, la esperada nueva entrega de la saga de Insomniac Games, ya tiene temporada de estreno confirmada por Sony.
                  </p>
                </a>
                <div className='mt-3'>
                  <a
                    href='#'
                    className='text-base font-semibold text-indigo-600 hover:text-indigo-500'
                  >
                   Leer más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
