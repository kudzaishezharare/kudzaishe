<template>
  <main class="article-content" id="main-content" tabindex="-1">
    <router-link to="/" class="back-link">← Back to Home</router-link>

    <!-- HEADLINE -->
    <h1>FlexID: Protocol for Insurable Identity</h1>
    <span class="subtitle">System Architecture & Economic Mechanism Design</span>

    <!-- CONTENT START -->
    <p>
      Digital identity systems often fail at the edge cases. Cryptography can prove that a key signed a document, but it cannot prove that the human behind the key isn't lying.
    </p>

    <p>
      FlexID was an architectural attempt to solve the "Bad Data" problem by introducing a financial layer to the trust stack. We treated identity verification not as a boolean (True/False), but as a risk assessment.
    </p>

    <h2>The Core Thesis</h2>
    <pre><code><span class="comment">// The "VISA Model" for Identity</span>

<span class="type">IF</span> (Identity_Risk > 0) {

    Apply_Insurance_Wrapper();

}



<span class="comment">// Result: The Verifier trusts the Insurance Policy, not just the Data.</span></code></pre>

    <p>
      Just as VISA makes payments usable by wrapping transactions in insurance (fraud protection), we made digital identity usable by wrapping credentials in financial guarantees. If an issuer verifies a passport incorrectly, the insurer pays out.
    </p>

    <h2>Verifiable Credentials Represents Risk Mitigation in Digital Trust Relationships</h2>

    <p>
      Every time a credential holder (person, institution, object, etc) presents credentials from their FlexID wallet to a verifier to prove their identity, they are enabling the verifier to lower their risk in a transaction with them—whether opening a bank account, presenting medical prescription, occupying a hotel room, or borrowing a book from a library. This reduction of risk has real, measurable value to the verifier, because it lowers their cost of doing business.
    </p>

    <p>
      It also has real value to the identity owner, because it removes friction and can even lower the price of a product (e.g., "Lower interest rates on loans", "higher borrowing power"). So both the presenter of the credential and the verifier accepting the credential are receiving real value from the issuer of the credential.
    </p>

    <p>
      The greater the risk being taken by the verifier, the greater the value of the verifiable claims.
    </p>

    <p>
      At the low end, even a claim that just helps a website verify that a login is not from a bot has value. At the high end, a credit report or a background check may mitigate thousands of dollars of risk. In short, all verifiable claims transfer some level of value to owners and verifiers.
    </p>

    <p>
      By turning you into an identity owner and putting you in the loop, you not only regain this privacy control, but the data and claims being shared actually increase in value because they are:
    </p>

    <ul>
      <li><strong>Authoritative</strong></li>
      <li><strong>Permissioned</strong></li>
      <li><strong>Current</strong></li>
    </ul>

    <p>
      At the Center, and fundamental to the FlexID protocol will be the FlexID digital token.
    </p>

    <p>
      By enabling digital value transfer to take place directly in-line with the exchange of verifiable claims—and by incorporating the same privacy-preserving zero-knowledge proof technology the FlexID token is designed to turn the FlexID platform into a digital marketplace for trust.
    </p>

    <h2>The FlexID global marketplace for digital credentials</h2>

    <p>
      This FlexID token will enable a global marketplace for digital credentials, creating a virtuous cycle of issuers competing on credential quality and cost. The value of verifiable claims can now flow either from verifiers to issuer zero-knowledge payment protocol so the issuer gains no knowledge of either who is using a credential nor where it is being used, only that the issuer is being paid the asking price in FlexID tokens.
    </p>

    <p>
      Indirectly from verifiers to owners to issuers, verifiers can pay for credentials directly from owners, and owners can do the same with issuers.
    </p>

    <p>
      As often as every single time a claim is exchanged.
    </p>

    <h2>The FlexID token will also enable a market for digital credential insurance</h2>

    <p>
      The risk of misidentification in an identity transaction is never zero. This isn't a problem of technology, it's a problem of people. People make mistakes.
    </p>

    <h3>Current Problem</h3>

    <p>
      Biometrics and state documents can both be unreliable in edge cases. People are constantly trying to get driving licenses when they shouldn't have one, they're trying to forge passports, they're making fake identities for identity theft, they're doing all of this stuff and it's common.
    </p>

    <p>
      Most of the work we have done so far covers proving positives. Is X Y? Is the person really who they are claiming to be? But quite often we want to prove negatives, and proving negatives can be hard. How do I make sure that if I'm in an auction, none of the other people in the auction are actually the same person? But trying to prove that people are different is an equally important problem, it's less common but it's incredibly key to the functioning of the economy in a lot of places; you don't want the businessperson to also be their own auditor.
    </p>

    <p>
      At the end of the day, "Nothing is worse than bad information with digital signatures on it." Most of the real problems we are solving with FlexID identity systems are to do with transaction costs and bad data. Cryptography, and the blockchain will certainly help with the transaction costs. It gives us the hard transit: you take something, you lock it down with cryptography, it stays locked and you're good.
    </p>

    <p>
      But at the edge of the cryptography you get this squishy, hard-to-navigate real-world thing. Bad data.
    </p>

    <p>
      So as we get closer and closer and closer to perfect systems, the need for insurance rises rather than falls, because nobody ever plans for them to go wrong.
    </p>

    <h3>Insurance can really help with the bad data</h3>

    <p>
      Harden what can be hardened with crypto, and bridge the gaps between these "hard plates" with insurance to handle the mess of reality.
    </p>

    <p>
      In this case, verifiable credentials are made up of insured facts. The idea is that we're basically building a business model where people take statements of fact from institutions, couple them with an insurance product and then use them as ways of generating certainty, and this is exactly the same model as VISA. VISA takes a payment instrument and wraps insurance on it; we take an identity instrument and we wrap insurance on it. The insurance is what makes VISA usable; the suggestion that I'm making is the insurance is what makes digital identity usable.
    </p>

    <p>
      You could have small-time claim insurance people: you take a passport to an office, they verify the passport, they look at it and they call the passport office, they do some basic fraud check and they make sure the picture isn't stuck on with glue, and they write you a certificate. I then hand that to somebody, and they don't have to see my passport, they just have to know that somebody who is an expert has seen the passport and has written a claim insurance on it. Suddenly, we begin to see how insurance can substitute for information. If I show you the insurance, you don't have to see the data that was used to generate the insurance.
    </p>

    <p>
      Issuers could purchase insurance directly from insurers and build it into the price of their claims.
    </p>

    <p>
      Or verifiers could independently purchase insurance on claims from issuers that an insurer is willing to underwrite. In either case, since insurers would themselves be issuers and verifiers of claims, the FlexID token is designed to establish a common, low-friction medium of exchange for all participants in the FlexID marketplace. This low friction should attract more insurers and make insurance affordable to a much wider spectrum of participants.
    </p>

    <p>
      Insurers are very good at risk assessment because it is their business—they have a strong financial incentive to be accurate. Their assessments about issuers, reflected in their pricing, can become a reputation signal other verifiers can rely on, further incenting issuers to do a good job.
    </p>

    <h2>System Architecture</h2>

    <p>
      Most Identity systems use a 3-party model (Issuer, Holder, Verifier). We introduced a 4th node: <strong>The Insurer</strong>.
    </p>

    <div class="architecture-diagram">
      <div class="node">Issuer</div>
      <div class="arrow"><span class="label">Credential + Policy</span></div>
      <div class="node insurer">Insurer</div>
      <div class="arrow"><span class="label">Guaranteed VC</span></div>
      <div class="node">Verifier</div>
    </div>

    <p style="font-size: 13px; color: var(--text-secondary); text-align: center; margin-top: -20px;">
      Fig 1. The Value Flow: Turning "Claims" into "Insured Assets"
    </p>

    <h2>Technical Implementation</h2>

    <p>
      We built this on the <strong>Algorand</strong> blockchain to leverage its speed and low transaction costs. The system utilized:
    </p>

    <ul>
      <li><strong>Verifiable Credentials (W3C DID):</strong> For portable, self-sovereign data.</li>
      <li><strong>Zero-Knowledge Proofs:</strong> Allowing holders to prove they had insurance without revealing the underlying PII.</li>
      <li><strong>FlexID Token:</strong> An economic primitive used to settle premiums between Verifiers, Issuers, and Insurers.</li>
    </ul>

    <h2>The "Market for Trust"</h2>

    <p>
      This architecture creates a marketplace. High-quality issuers (who rarely verify fake docs) get cheaper insurance premiums. Low-quality issuers get priced out.
    </p>

    <p>
      This brings <strong>audit-grade observability</strong> to the messy world of human identity. It hardens the "soft edges" of reality with economic incentives.
    </p>

    <br>
    <hr style="border: 0; border-top: 1px solid var(--border);">
    <br>

    <p style="font-size: 13px; color: var(--text-secondary);">
      <em>Originally published as part of FlexID's technical whitepaper (2021-2023). Co-founded by Kudzaishe Zharare.</em>
    </p>
  </main>
</template>

<script>
export default {
  name: 'FlexID'
}
</script>

<style scoped>
.article-content {
  max-width: 700px;
  margin: 80px auto;
  padding: 24px;
}

.architecture-diagram {
  background: #151515;
  border: 1px solid var(--border);
  padding: 40px;
  margin: 40px 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.node {
  border: 1px solid var(--accent);
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 13px;
  background: rgba(164, 120, 90, 0.1);
}

.node.insurer {
  border-color: #fff;
  color: #fff;
  background: rgba(255,255,255,0.05);
}

.arrow {
  flex: 1;
  height: 1px;
  background: var(--border);
  position: relative;
  margin: 0 10px;
}

.arrow::after {
  content: '>';
  position: absolute;
  right: 0;
  top: -7px;
  color: var(--border);
}

.label {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  color: var(--text-secondary);
}
</style>

