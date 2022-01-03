<svelte:head>
  <title>Four Card Feature Section</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class="bg-cstm-neutral-light-gray">
  <div class="min-h-screen md:container md:mx-auto px-10 py-20 font-poppins">
    <div>
      <h1
        class="font-light text-2xl md:text-5xl text-center text-cstm-neutral-dark-blue"
      >
        Reliable, efficient delivery
      </h1>
      <h2
        class="font-bold text-2xl md:text-5xl text-center text-cstm-neutral-dark-blue md:mt-4"
      >
        Powered by Technology
      </h2>
      <p
        class="text-cstm-neutral-grayish-blue text-center mt-5 mb-10 md:mt-8 md:max-w-lg md:mx-auto"
      >
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Supervisor -->
      <div class="md:row-span-2 md:flex md:items-center">
        <div
          class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-cyan p-6 flex flex-col items-start flex-1"
        >
          <h3 class="text-xl font-bold">Supervisor</h3>
          <p class="text-cstm-neutral-grayish-blue mb-10 md:max-w-xs">
            Monitors activity to identify project roadblocks
          </p>
          <img
            src="/assets/icon-supervisor.svg"
            alt="supervisor icon"
            class="self-end"
          />
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <!-- Team Builder -->
        <div
          class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-red p-6 flex flex-col items-start"
        >
          <h3 class="text-xl font-bold ">Team Builder</h3>
          <p class="text-cstm-neutral-grayish-blue mb-10 md:max-w-xs">
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            src="/assets/icon-team-builder.svg"
            alt="team builder icon"
            class="self-end"
          />
        </div>

        <!-- Karma -->
        <div
          class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-orange p-6 flex flex-col items-start"
        >
          <h3 class="text-xl font-bold">Karma</h3>
          <p class="text-cstm-neutral-grayish-blue mb-10 md:max-w-xs">
            Regularly evaluates our talent to ensure quality
          </p>
          <img src="/assets/icon-karma.svg" alt="karma icon" class="self-end" />
        </div>
      </div>

      <!-- Calculator -->
      <div class="md:row-span-2 md:flex md:items-center">
        <div
          class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-blue p-6 flex flex-col items-start flex-1"
        >
          <h3 class="text-xl font-bold">Calculator</h3>
          <p class="text-cstm-neutral-grayish-blue mb-10 md:max-w-xs">
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            src="/assets/icon-calculator.svg"
            alt="calculator icon"
            class="self-end"
          />
        </div>
      </div>
    </div>
  </div>
</main>

<footer class="bg-cstm-neutral-light-gray flex justify-center pb-5">
  <div class="text-center">
    <p>
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="underline">Frontend Mentor</a
      >.
    </p>
    <p>
      Coded by
      <a
        href="https://github.com/waleedmumtaz"
        target="_blank"
        class="font-bold underline">Waleed Mumtaz</a
      >.
    </p>
  </div>
</footer>
