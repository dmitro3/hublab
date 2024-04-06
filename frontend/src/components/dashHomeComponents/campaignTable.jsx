import "../../app/globals.css";
import { Link } from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const CampaignTable = ({ campaignData }) => {
  const CampaignNameTemplate = (rowData) => {
    return (
      <p className="font-normal text-[16px] text-[#424242]">{rowData.name}</p>
    );
  };

  const CampaignLinkTemplate = (rowData) => {
    return (
      <Link
        href={rowData.campaignLink}
        className="py-2 px-6 rounded-lg border bg-primary font-normal text-[14px]">
        {rowData.link}
      </Link>
    );
  };

  const CampaignStatusTemplate = (rowData) => {
    let statusClass = "";
    let statusText = "";

    switch (rowData.status) {
      case "ongoing":
        statusClass = "text-[#34A90B] border-[#34A90B] bg-[#DAFCDE]";
        statusText = "Ongoing";
        break;
      case "upcoming":
        statusClass = "text-[#00ADEF] border-[#00ADEF] bg-[#E0F7FF]";
        statusText = "Upcoming";
        break;
      case "closed":
        statusClass = "text-[#3D41CC] border-[#3D41CC] bg-[#DFDFF7]";
        statusText = "Closed";
        break;
      case "deleted":
        statusClass = "text-[#EF00AD] border-[#EF00AD] bg-[#FFD6F4]";
        statusText = "Deleted";
        break;
      default:
        break;
    }

    return (
      <button
        className={`py-2 px-6 rounded-lg border bg-primary font-normal text-[14px] ${statusClass}`}
      >
        {statusText}
      </button>
    );
  };

  const CampaignParticipantsTemplate = (rowData) => {
    return (
      <p className="font-normal text-[16px] text-[#424242]">
        {rowData.participants}
      </p>
    );
  };
  const CampaignParticipantsWithRewardTemplate = (rowData) => {
    return (
      <p className="font-normal text-[16px] text-[#424242]">
        {rowData.participantsWithReward}
      </p>
    );
  };
  const CampaignPointsTemplate = (rowData) => {
    return (
      <p className="font-normal text-[16px] text-[#424242]">{rowData.points}</p>
    );
  };
  return (
    <div className="w-full flex flex-col items-start gap-5">
      <h2 className="text-primary font-semibold text-[28px]">All Campaign</h2>

      <DataTable
        value={campaignData}
        paginator
        rows={5}
        tableStyle={{ minWidth: "50rem", backgroundColor: "#fff" }}
        rowClassName={() => "table-row"}
      >
        <Column
          field="name"
          header="Campaigns"
          body={CampaignNameTemplate}
          style={{ width: "25%", padding: "15px" }}
        />
        <Column
          field="status"
          header="Status"
          body={CampaignStatusTemplate}
          style={{ width: "25%", padding: "15px" }}
        />
        <Column
          field="link"
          header="Campaign Link"
          body={CampaignLinkTemplate}
          style={{ width: "25%", padding: "15px" }}
        />
        <Column
          field="participants"
          header="Participants"
          body={CampaignParticipantsTemplate}
          style={{ width: "25%", padding: "15px" }}
        />
        <Column
          field="participantsWithReward"
          header="Participants With Reward"
          body={CampaignParticipantsWithRewardTemplate}
          style={{ width: "25%", padding: "15px" }}
        />
        <Column
          field="points"
          header="Points"
          body={CampaignPointsTemplate}
          style={{ width: "25%", padding: "15px" }}
        />
      </DataTable>
    </div>
  );
};

export default CampaignTable;