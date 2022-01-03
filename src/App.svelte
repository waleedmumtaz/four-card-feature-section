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

<main>
  <div class="bg-cstm-neutral-light-gray min-h-screen px-10 py-20 font-poppins">
    <div>
      <h1 class="font-light text-2xl text-center">
        Reliable, efficient delivery
      </h1>
      <h2 class="font-bold text-2xl text-center">Powered by Technology</h2>
      <p class="text-cstm-neutral-grayish-blue text-center mt-5 mb-10">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
    </div>
    <div class="grid grid-cols-1 gap-6">
      <div
        class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-cyan p-6 flex flex-col items-start"
      >
        <h3 class="text-xl font-bold">Supervisor</h3>
        <p class="text-cstm-neutral-grayish-blue mb-10">
          Monitors activity to identify project roadblocks
        </p>
        <img
          src="/assets/icon-supervisor.svg"
          alt="supervisor icon"
          class="self-end"
        />
      </div>
      <div
        class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-red p-6 flex flex-col items-start"
      >
        <h3 class="text-xl font-bold ">Team Builder</h3>
        <p class="text-cstm-neutral-grayish-blue mb-10">
          Scans our talent network to create the optimal team for your project
        </p>
        <img
          src="/assets/icon-team-builder.svg"
          alt="team builder icon"
          class="self-end"
        />
      </div>
      <div
        class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-orange p-6 flex flex-col items-start"
      >
        <h3 class="text-xl font-bold">Karma</h3>
        <p class="text-cstm-neutral-grayish-blue mb-10">
          Regularly evaluates our talent to ensure quality
        </p>
        <img src="/assets/icon-karma.svg" alt="karma icon" class="self-end" />
      </div>
      <div
        class="bg-white shadow-xl rounded-md border-t-4 border-cstm-primary-blue p-6 flex flex-col items-start"
      >
        <h3 class="text-xl font-bold">Calculator</h3>
        <p class="text-cstm-neutral-grayish-blue mb-10">
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
</main>
