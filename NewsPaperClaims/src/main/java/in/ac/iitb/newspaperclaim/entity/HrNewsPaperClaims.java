package in.ac.iitb.newspaperclaim.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name="hr_newspaperclaims",uniqueConstraints= {@UniqueConstraint(columnNames = {"sapId","ClaimPeriod","claimYear"})})
public class HrNewsPaperClaims {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="news_paper_claims_id")
	private long newsPaperClaimsId;
	
	@Column(name="sap_id")
	private String sapId;
	
	@Column(name="paylevel")
	private String payLevel;
	
	@Column(name="group_")
	private String group;
	
	@Column(name="claim_period")
	private String claimPeriod;
	
	@Column(name="claim_year")
	private long claimYear;
	
	@Column(name="claim_amount")
	private long claimAmount;
	
	@Column(name="claim_request_date")
	private LocalDate claimRequestDate;
	
	@Column(name="approved_by")
	private String approvedBy;
	
	@Column(name="approved_on")
	private String approvedOn;
	
	@Column(name="approved_amount")
	private long approvedAmount;
	
	@Column(name="req_status")
	private String reqStatus;
	
	@Column(name="pay_state")
	private String payState;

	
	
	//Constructors
	public HrNewsPaperClaims(long newsPaperClaimsId, String sapId, String payLevel, String group, String claimPeriod,
			long claimYear, long claimAmount, LocalDate claimRequestDate, String approvedBy, String approvedOn,
			long approvedAmount, String reqStatus, String payState) {
		this.newsPaperClaimsId = newsPaperClaimsId;
		this.sapId = sapId;
		this.payLevel = payLevel;
		this.group = group;
		this.claimPeriod = claimPeriod;
		this.claimYear = claimYear;
		this.claimAmount = claimAmount;
		this.claimRequestDate = claimRequestDate;
		this.approvedBy = approvedBy;
		this.approvedOn = approvedOn;
		this.approvedAmount = approvedAmount;
		this.reqStatus = reqStatus;
		this.payState = payState;
	}

	public HrNewsPaperClaims() {
		
	}


	//Getters and Setters

	public String getSapId() {
		return sapId;
	}

	public void setSapId(String sapId) {
		this.sapId = sapId;
	}

	public String getPayLevel() {
		return payLevel;
	}

	public void setPayLevel(String payLevel) {
		this.payLevel = payLevel;
	}

	public String getGroup() {
		return group;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public String getClaimPeriod() {
		return claimPeriod;
	}

	public void setClaimPeriod(String claimPeriod) {
		this.claimPeriod = claimPeriod;
	}

	public long getClaimYear() {
		return claimYear;
	}

	public void setClaimYear(long claimYear) {
		this.claimYear = claimYear;
	}

	public long getClaimAmount() {
		return claimAmount;
	}

	public void setClaimAmount(long claimAmount) {
		this.claimAmount = claimAmount;
	}

	public LocalDate getClaimRequestDate() {
		return claimRequestDate;
	}

	public void setClaimRequestDate(LocalDate claimRequestDate) {
		this.claimRequestDate = claimRequestDate;
	}

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	public String getApprovedOn() {
		return approvedOn;
	}

	public void setApprovedOn(String approvedOn) {
		this.approvedOn = approvedOn;
	}

	public long getApprovedAmount() {
		return approvedAmount;
	}

	public void setApprovedAmount(long approvedAmount) {
		this.approvedAmount = approvedAmount;
	}

	public String getReqStatus() {
		return reqStatus;
	}

	public void setReqStatus(String reqStatus) {
		this.reqStatus = reqStatus;
	}

	public String getPayState() {
		return payState;
	}

	public void setPayState(String payState) {
		this.payState = payState;
	}
	
	
	
}
