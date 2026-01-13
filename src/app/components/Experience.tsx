export default function Experience() {
  return (
    <div className="flex flex-col items-start">
      <h3 className="custom-text text-3xl font-bold mb-4">Experience</h3>
      <div className="text-lg space-y-6">
        <div>
          <h4 className="text-xl font-bold mb-1">Chewy — Software Engineer Intern</h4>
          <p className="text-gray-300">
            Shipped production backend systems at Chewy, unifying 4 legacy APIs, cutting service calls by 75%, and supporting large-scale customer service workflows on cloud-native infrastructure.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-1">Build UMass — Software Engineer</h4>
          <p className="text-gray-300">
            Built full-stack features for a student-run platform, working in an Agile team to deliver real software used by campus organizations.
          </p>
          
        </div>

        <div>
          <h4 className="text-xl font-bold mb-1">Maintainer — Chacha (Open Source)</h4>
          <p className="text-gray-300">
          Design and maintain an open-source Python CLI with AI intergations that automates Git workflows and improves developer productivity.          </p>
        </div>


      </div>
    </div>
  );
}
